from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import (
    String,
    Integer,
)

from database import Base
from pydantic import BaseModel
from pydantic import ConfigDict


class Car(Base):
    __tablename__ = "cars"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    brand: Mapped[str] = mapped_column(String(100), nullable=False)
    max_speed: Mapped[int] = mapped_column(Integer, nullable=False)
    engine_power: Mapped[int] = mapped_column(Integer, nullable=False)


class CarAddModel(BaseModel):
    brand: str
    max_speed: int
    engine_power: int


class CarModel(CarAddModel):
    id: int
    # Allow Pydantic v2 to read attributes from ORM objects (SQLAlchemy)
    model_config = ConfigDict(from_attributes=True)