from typing import Optional, List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update, delete

from db.models.car_stock import CarStock
from schemas.car_stock import CarStockCreate, CarStockUpdate


class CarStockCRUD:
    """CRUD операції для товарів Hot Wheels на складі"""

    def __init__(self):
        self.model = CarStock

    async def get_all_cars(self, db: AsyncSession) -> List[CarStock]:
        """Отримати всі товари на складі"""
        query = select(self.model)
        result = await db.execute(query)
        return result.scalars().all()

    async def get_filtered_cars(
        self,
        db: AsyncSession,
        color: Optional[str] = None,
        price_range: Optional[str] = None,
        category: Optional[str] = None
    ) -> List[CarStock]:

        query = select(self.model)

        if color and color.lower() != "all":
            query = query.where(self.model.color.ilike(f"%{color}%"))

        if price_range and price_range.lower() != "all":
            if price_range.lower() == "low":
                query = query.where(self.model.price <= 100)
            elif price_range.lower() == "medium":
                query = query.where(self.model.price.between(100, 400))
            elif price_range.lower() == "high":
                query = query.where(self.model.price >= 400)

        if category and category.lower() != "all":
            query = query.where(self.model.category.ilike(f"%{category}%"))

        result = await db.execute(query)
        return result.scalars().all()

    async def get_by_id(self, db: AsyncSession, car_id: int) -> Optional[CarStock]:
        """Отримати товар по ID"""
        query = select(self.model).where(self.model.car_id == car_id)
        result = await db.execute(query)
        return result.scalar_one_or_none()

    async def create(self, db: AsyncSession, car_data: CarStockCreate) -> CarStock:
        """Створити новий товар на складі"""
        try:
            car_dict = car_data.model_dump()
            new_car = self.model(**car_dict)
            db.add(new_car)
            await db.commit()
            await db.refresh(new_car)
            return new_car

        except Exception as e:
            await db.rollback()
            raise e

    async def update(
        self, db: AsyncSession, car_id: int, car_data: CarStockUpdate
    ) -> Optional[CarStock]:
        """Оновити інформацію про товар на складі"""
        car = await self.get_by_id(db, car_id)
        if not car:
            return None

        update_data = car_data.model_dump(exclude_unset=True)

        try:
            query = (
                update(self.model)
                .where(self.model.car_id == car_id)
                .values(**update_data)
            )
            await db.execute(query)
            await db.commit()
            return await self.get_by_id(db, car_id)

        except Exception as e:
            await db.rollback()
            raise e

    async def delete(self, db: AsyncSession, car_id: int) -> bool:
        """Видалити товар зі складу"""
        car = await self.get_by_id(db, car_id)
        if not car:
            return False

        try:
            query = delete(self.model).where(self.model.car_id == car_id)
            result = await db.execute(query)
            await db.commit()
            return result.rowcount > 0

        except Exception as e:
            await db.rollback()
            raise e

car_stock_crud = CarStockCRUD()
