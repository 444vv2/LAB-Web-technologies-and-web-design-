from typing import Optional
from pydantic import BaseModel, ConfigDict

class OrderListBase(BaseModel):
    order_id: int
    car_id: int
    quantity: int

class OrderListCreate(OrderListBase):
    pass

class OrderListUpdate(BaseModel):
    quantity: Optional[int] = None

class OrderListResponse(BaseModel):
    order_list_id: int
    order_id: int
    car_id: int
    quantity: int

    class Config:
        model_config = ConfigDict(from_attributes=True)
