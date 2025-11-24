from typing import Optional, List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update, delete
from sqlalchemy.orm import selectinload

from db.models.order_list import OrderList
from db.models.car_stock import CarStock
from schemas.order_list import OrderListCreate, OrderListUpdate


class OrderListCRUD:
    """CRUD операції для позицій замовлення (order items)"""

    def __init__(self):
        self.model = OrderList

    async def get_by_id(self, db: AsyncSession, order_list_id: int) -> Optional[OrderList]:
        """Отримати позицію замовлення по ID з товаром"""
        query = (
            select(self.model)
            .where(self.model.order_list_id == order_list_id)
            .options(selectinload(self.model.car_stock))
        )
        result = await db.execute(query)
        return result.scalar_one_or_none()

    async def get_by_order_id(self, db: AsyncSession, order_id: int) -> List[OrderList]:
        """Отримати всі позиції конкретного замовлення"""
        query = (
            select(self.model)
            .where(self.model.order_id == order_id)
            .options(selectinload(self.model.car_stock))
        )
        result = await db.execute(query)
        return result.scalars().all()

    async def create(self, db: AsyncSession, order_list_data: OrderListCreate) -> OrderList:
        """Створити нову позицію замовлення"""

        car_query = select(CarStock).where(CarStock.car_id == order_list_data.car_id)
        car_result = await db.execute(car_query)
        car = car_result.scalar_one_or_none()

        if not car:
            raise ValueError(f"Car with id {order_list_data.car_id} not found")

        if car.quantity < order_list_data.quantity:
            raise ValueError(
                f"Not enough stock for car {car.title}. "
                f"Available: {car.quantity}, requested: {order_list_data.quantity}"
            )

        try:
            order_list_dict = order_list_data.model_dump()
            new_order_list = self.model(**order_list_dict)
            db.add(new_order_list)

            car.quantity -= order_list_data.quantity

            await db.commit()
            await db.refresh(new_order_list)
            return new_order_list

        except Exception as e:
            await db.rollback()
            raise e

    async def update(
        self, db: AsyncSession, order_list_id: int, order_list_data: OrderListUpdate
    ) -> Optional[OrderList]:
        """Оновити позицію замовлення (тільки кількість)"""
        order_item = await self.get_by_id(db, order_list_id)
        if not order_item:
            return None

        # Перевіряємо чи можемо змінити кількість
        if "quantity" in order_list_data.model_dump(exclude_unset=True):
            new_quantity = order_list_data.quantity
            old_quantity = order_item.quantity
            quantity_diff = new_quantity - old_quantity

            # Перевіряємо наявність товару для збільшення кількості
            if quantity_diff > 0:
                car_query = select(CarStock).where(
                    CarStock.car_id == order_item.car_id
                )
                car_result = await db.execute(car_query)
                car = car_result.scalar_one_or_none()

                if not car or car.quantity < quantity_diff:
                    raise ValueError(
                        f"Not enough stock to increase quantity by {quantity_diff}"
                    )

        try:
            update_data = order_list_data.model_dump(exclude_unset=True)
            query = (
                update(self.model)
                .where(self.model.order_list_id == order_list_id)
                .values(**update_data)
            )
            await db.execute(query)

            if "quantity" in update_data:
                car_query = select(CarStock).where(
                    CarStock.car_id == order_item.car_id
                )
                car_result = await db.execute(car_query)
                car = car_result.scalar_one_or_none()

                if car:
                    car.quantity -= quantity_diff

            await db.commit()
            return await self.get_by_id(db, order_list_id)

        except Exception as e:
            await db.rollback()
            raise e

    async def delete(self, db: AsyncSession, order_list_id: int) -> bool:
        """Видалити позицію замовлення та повернути товар на склад"""
        order_item = await self.get_by_id(db, order_list_id)
        if not order_item:
            return False

        try:
            car_query = select(CarStock).where(CarStock.car_id == order_item.car_id)
            car_result = await db.execute(car_query)
            car = car_result.scalar_one_or_none()

            if car:
                car.quantity += order_item.quantity

            # Видаляємо позицію замовлення
            delete_query = delete(self.model).where(
                self.model.order_list_id == order_list_id
            )
            result = await db.execute(delete_query)
            await db.commit()

            return result.rowcount > 0

        except Exception as e:
            await db.rollback()
            raise e

    async def calculate_order_total(self, db: AsyncSession, order_id: int) -> float:
        """Розрахувати загальну суму замовлення"""
        order_items = await self.get_by_order_id(db, order_id)
        total = 0.0

        for item in order_items:
            if item.car_stock:
                total += item.car_stock.price * item.quantity

        return total

order_list_crud = OrderListCRUD()
