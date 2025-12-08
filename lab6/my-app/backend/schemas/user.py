from typing import Optional
from pydantic import BaseModel, EmailStr, ConfigDict

class UserBase(BaseModel):
    first_name: str
    last_name: str
    phone: str
    email: EmailStr
    address: str
    password: str
    is_active: Optional[bool] = True

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[EmailStr] = None
    address: Optional[str] = None
    password: Optional[str] = None

class UserResponse(BaseModel):
    user_id: int
    first_name: str
    last_name: str
    phone: str
    email: EmailStr
    address: str

    class Config:
        model_config = ConfigDict(from_attributes=True)
