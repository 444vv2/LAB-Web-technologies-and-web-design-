from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from db.base import get_db
from schemas.car_stock import CarStockResponse, CarStockCreate, CarStockUpdate
from crud import car_stock_crud

router = APIRouter(prefix="/api/cars", tags=["cars"])

@router.get("/", response_model=List[CarStockResponse])
async def get_cars(db: AsyncSession = Depends(get_db)):
    """
    Отримати каталог машинок
    """
    try:
        cars = await car_stock_crud.get_all_cars(db)
        return cars
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Помилка отримання каталогу"
        ) from e

@router.get("/{car_id}", response_model=CarStockResponse)
async def get_car(
    car_id: int,
    db: AsyncSession = Depends(get_db)
):
    """
    Отримати машинку по ID
    """
    car = await car_stock_crud.get_by_id(db, car_id)
    if not car:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Машинка не знайдена"
        )
    return car

@router.post("/", response_model=CarStockResponse, status_code=status.HTTP_201_CREATED)
async def create_car(
    car_data: CarStockCreate,
    db: AsyncSession = Depends(get_db)
):
    """
    Додати нову машинку до каталогу
    """
    try:
        new_car = await car_stock_crud.create(db, car_data)
        return new_car
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Помилка створення машинки"
        ) from e

@router.put("/{car_id}", response_model=CarStockResponse)
async def update_car(
    car_id: int,
    car_data: CarStockUpdate,
    db: AsyncSession = Depends(get_db)
):
    """
    Оновити інформацію про машинку
    """
    updated_car = await car_stock_crud.update(db, car_id, car_data)
    if not updated_car:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Машинка не знайдена"
        )
    return updated_car

@router.delete("/{car_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_car(
    car_id: int,
    db: AsyncSession = Depends(get_db)
):
    """
    Видалити машинку з каталогу
    """
    success = await car_stock_crud.delete(db, car_id)
    if not success:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Машинка не знайдена"
        )
    return None
