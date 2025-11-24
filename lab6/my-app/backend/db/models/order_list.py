from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import (
    Integer,
    ForeignKey,
)
from db.base import Base

class OrderList(Base):
    __tablename__ = "order_list"

    order_list_id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True, autoincrement=True, nullable=False)
    order_id: Mapped[int] = mapped_column(
        Integer,
        ForeignKey("order.order_id", name="fk_orderlist_order"),
        nullable=False,
    )
    car_id: Mapped[int] = mapped_column(
        Integer,
        ForeignKey("car_stock.car_id", name="fk_orderlist_carstock"),
        nullable=False,
    )
    quantity: Mapped[int] = mapped_column(Integer, nullable=False)

    order = relationship("Order", back_populates="order_items")
    car_stock = relationship("CarStock", back_populates="order_items")
