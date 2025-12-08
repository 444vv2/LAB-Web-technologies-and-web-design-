from typing import Optional
from pydantic import BaseModel, ConfigDict

class OrderBase(BaseModel):
    user_id: int
    total_price: float
    status: Optional[str] = "pending"

class OrderCreate(OrderBase):
    pass

class OrderUpdate(BaseModel):
    total_price: Optional[float] = None
    status: Optional[str] = None

class OrderResponse(BaseModel):
    order_id: int
    user_id: int
    total_price: float
    order_date: str
    status: str

    class Config:
        model_config = ConfigDict(from_attributes=True)
