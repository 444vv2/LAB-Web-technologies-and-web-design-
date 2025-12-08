from datetime import datetime
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import (
    Integer,
    DateTime,
    Float,
    ForeignKey,
    Enum,
)
from db.base import Base

class Order(Base):
    __tablename__ = "order"

    order_id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True, autoincrement=True, nullable=False)
    user_id: Mapped[int] = mapped_column(
        Integer,
        ForeignKey("user.user_id", name="fk_order_user"),
        nullable=False,
    )
    total_price: Mapped[float] = mapped_column(Float, nullable=False)
    order_date: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow, nullable=False)
    status: Mapped[str] = mapped_column(
        Enum("pending", "shipped", "delivered", "canceled", name="order_status"),
        default="pending",
        nullable=False,
    )

    user = relationship("User", back_populates="orders")
    order_items = relationship("OrderList", back_populates="order")
