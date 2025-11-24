from typing import Optional, List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update
from sqlalchemy.orm import selectinload

from db.models.order import Order
from db.models.order_list import OrderList
from db.models.car_stock import CarStock
from schemas.order import OrderCreate, OrderUpdate


class OrderCRUD:
    """CRUD операції для замовлень"""

    def __init__(self):
        self.model = Order

    async def get_by_id(self, db: AsyncSession, order_id: int) -> Optional[Order]:
        """Отримати замовлення по ID з усіма зв'язаними даними"""
        query = (
            select(self.model)
            .where(self.model.order_id == order_id)
            .options(
                selectinload(self.model.order_items).selectinload(OrderList.car_stock),
                selectinload(self.model.user),
            )
        )
        result = await db.execute(query)
        return result.scalar_one_or_none()

    async def create(
        self, db: AsyncSession, order_data: OrderCreate, user_id: int
    ) -> Order:
        """Створити нове замовлення з товарами"""
        try:
            # Перевіряємо наявність товарів та рахуємо загальну суму
            total_price = 0
            items_to_create = []

            for item in order_data.items:
                # Перевіряємо наявність товару
                car_query = select(CarStock).where(CarStock.car_id == item.car_id)
                car_result = await db.execute(car_query)
                car = car_result.scalar_one_or_none()

                if not car:
                    raise ValueError(f"Car with id {item.car_id} not found")

                if car.quantity < item.quantity:
                    raise ValueError(
                        f"Not enough stock for car {car.title}. "
                        f"Available: {car.quantity}, requested: {item.quantity}"
                    )

                # Додаємо до загальної суми
                item_total = car.price * item.quantity
                total_price += item_total

                # Зберігаємо дані для створення
                items_to_create.append(
                    {
                        "car_id": item.car_id,
                        "quantity": item.quantity,
                        "price_at_time": car.price,
                        "car": car,
                    }
                )

            # Створюємо замовлення
            new_order = self.model(
                user_id=user_id,
                total_price=total_price,
                shipping_address=order_data.shipping_address,
                payment_method=order_data.payment_method,
                status="pending",
            )
            db.add(new_order)
            await db.flush()

            # Створюємо позиції замовлення та зменшуємо кількість товарів
            for item_data in items_to_create:
                order_item = OrderList(
                    order_id=new_order.order_id,
                    car_id=item_data["car_id"],
                    quantity=item_data["quantity"],
                )
                db.add(order_item)

                # Зменшуємо кількість товару на складі
                car = item_data["car"]
                car.quantity -= item_data["quantity"]

            await db.commit()
            await db.refresh(new_order)

            return await self.get_by_id(db, new_order.order_id)

        except Exception as e:
            await db.rollback()
            raise e

    async def update(
        self, db: AsyncSession, order_id: int, order_data: OrderUpdate
    ) -> Optional[Order]:
        """Оновити замовлення (тільки статус, адресу, спосіб оплати)"""
        order = await self.get_by_id(db, order_id)
        if not order:
            return None

        # Не дозволяємо змінювати товари в замовленні після створення
        # Тільки статус та деталі доставки
        update_data = order_data.model_dump(exclude_unset=True)

        try:
            query = (
                update(self.model)
                .where(self.model.order_id == order_id)
                .values(**update_data)
            )
            await db.execute(query)
            await db.commit()

            return await self.get_by_id(db, order_id)

        except Exception as e:
            await db.rollback()
            raise e

    async def cancel_order(self, db: AsyncSession, order_id: int) -> Optional[Order]:
        """Скасувати замовлення та повернути товари на склад"""
        order = await self.get_by_id(db, order_id)
        if not order:
            return None

        if order.status in ["delivered", "cancelled"]:
            raise ValueError(f"Cannot cancel order with status: {order.status}")

        try:
            # Повертаємо товари на склад
            for order_item in order.order_items:
                car_query = select(CarStock).where(
                    CarStock.car_id == order_item.car_id
                )
                car_result = await db.execute(car_query)
                car = car_result.scalar_one_or_none()

                if car:
                    car.quantity += order_item.quantity

            # Змінюємо статус замовлення
            order.status = "cancelled"
            await db.commit()

            return await self.get_by_id(db, order_id)

        except Exception as e:
            await db.rollback()
            raise e

    async def get_user_orders(
        self, db: AsyncSession, user_id: int, skip: int = 0, limit: int = 100
    ) -> List[Order]:
        """Отримати замовлення користувача"""
        return await self.get_multi(
            db, skip=skip, limit=limit, user_id=user_id
        )

    async def get_orders_by_status(
        self, db: AsyncSession, status: str, skip: int = 0, limit: int = 100
    ) -> List[Order]:
        """Отримати замовлення за статусом"""
        return await self.get_multi(
            db, skip=skip, limit=limit, status=status
        )

    async def get_order_total(self, db: AsyncSession, order_id: int) -> float:
        """Отримати загальну суму замовлення"""
        order = await self.get_by_id(db, order_id)
        if not order:
            return 0.0
        return order.total_price

order_crud = OrderCRUD()
