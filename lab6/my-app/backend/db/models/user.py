from datetime import datetime
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import (
    String,
    Integer,
    DateTime,
    Boolean,
)
from db.base import Base

class User(Base):
    __tablename__ = "user"

    user_id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True, autoincrement=True, nullable=False)
    first_name: Mapped[str] = mapped_column(String(45), nullable=False)
    last_name: Mapped[str] = mapped_column(String(45), nullable=False)
    phone: Mapped[str] = mapped_column(String(45), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String(100), nullable=False, index=True)
    address: Mapped[str] = mapped_column(String(255), nullable=False)
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)

    orders = relationship("Order", back_populates="user")
