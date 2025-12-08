from typing import Optional
from pydantic import BaseModel, ConfigDict

class CarStockBase(BaseModel):
    title: str
    description: Optional[str] = None
    color: str
    price: float
    quantity: int
    image_url: Optional[str] = None
    category: str

class CarStockCreate(CarStockBase):
    pass

class CarStockUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    color: Optional[str] = None
    price: Optional[float] = None
    quantity: Optional[int] = None
    image_url: Optional[str] = None
    category: Optional[str] = None

class CarStockResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    car_id: int
    title: str
    description: Optional[str] = None
    color: str
    price: float
    quantity: int
    image_url: Optional[str] = None
    category: str
