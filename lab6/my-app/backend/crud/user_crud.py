from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, update
from passlib.context import CryptContext

from db.models.user import User
from schemas.user import UserCreate, UserUpdate

# Налаштування для хешування паролів
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class UserCRUD:
    """CRUD операції для користувачів"""

    def __init__(self):
        self.model = User

    def hash_password(self, password: str) -> str:
        """Хешування пароля"""
        return pwd_context.hash(password)

    def verify_password(self, plain_password: str, hashed_password: str) -> bool:
        """Перевірка пароля"""
        return pwd_context.verify(plain_password, hashed_password)

    async def get_by_id(self, db: AsyncSession, user_id: int) -> Optional[User]:
        """Отримати користувача по ID"""
        query = select(self.model).where(self.model.user_id == user_id)
        result = await db.execute(query)
        return result.scalar_one_or_none()

    async def get_by_email(self, db: AsyncSession, email: str) -> Optional[User]:
        """Отримати користувача по email"""
        query = select(self.model).where(self.model.email == email)
        result = await db.execute(query)
        return result.scalar_one_or_none()

    async def get_by_phone(self, db: AsyncSession, phone: str) -> Optional[User]:
        """Отримати користувача по телефону"""
        query = select(self.model).where(self.model.phone == phone)
        result = await db.execute(query)
        return result.scalar_one_or_none()

    async def create(self, db: AsyncSession, user_data: UserCreate) -> User:
        """Створити нового користувача"""
        existing_user = await self.get_by_email(db, user_data.email)
        if existing_user:
            raise ValueError(f"User with email {user_data.email} already exists")

        existing_phone = await self.get_by_phone(db, user_data.phone)
        if existing_phone:
            raise ValueError(f"User with phone {user_data.phone} already exists")

        hashed_password = self.hash_password(user_data.password)

        user_dict = user_data.model_dump(exclude={"password"})
        user_dict["password_hash"] = hashed_password

        new_user = self.model(**user_dict)
        db.add(new_user)

        try:
            await db.commit()
            await db.refresh(new_user)
            return new_user
        except Exception as e:
            await db.rollback()
            raise e

    async def update(
        self, db: AsyncSession, user_id: int, user_data: UserUpdate
    ) -> Optional[User]:
        """Оновити користувача"""
        user = await self.get_by_id(db, user_id)
        if not user:
            return None

        update_data = user_data.model_dump(exclude_unset=True)

        if "password" in update_data:
            update_data["password_hash"] = self.hash_password(
                update_data.pop("password")
            )

        if "email" in update_data and update_data["email"] != user.email:
            existing_email = await self.get_by_email(db, update_data["email"])
            if existing_email:
                raise ValueError(f"Email {update_data['email']} is already taken")

        if "phone" in update_data and update_data["phone"] != user.phone:
            existing_phone = await self.get_by_phone(db, update_data["phone"])
            if existing_phone:
                raise ValueError(f"Phone {update_data['phone']} is already taken")

        query = (
            update(self.model)
            .where(self.model.user_id == user_id)
            .values(**update_data)
        )

        try:
            await db.execute(query)
            await db.commit()

            updated_user = await self.get_by_id(db, user_id)
            return updated_user
        except Exception as e:
            await db.rollback()
            raise e

    async def delete(self, db: AsyncSession, user_id: int) -> bool:
        """Видалити користувача (soft delete - деактивація)"""
        query = (
            update(self.model)
            .where(self.model.user_id == user_id)
            .values(is_active=False)
        )

        try:
            result = await db.execute(query)
            await db.commit()
            return result.rowcount > 0
        except Exception as e:
            await db.rollback()
            raise e

    async def authenticate(
        self, db: AsyncSession, email: str, password: str
    ) -> Optional[User]:
        """Аутентифікація користувача"""
        user = await self.get_by_email(db, email)
        if not user:
            return None

        if not self.verify_password(password, user.password_hash):
            return None

        return user

user_crud = UserCRUD()
