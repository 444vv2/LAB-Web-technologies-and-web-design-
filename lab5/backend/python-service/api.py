from typing import Annotated
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_db
from models import Car, CarAddModel, CarModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency type: AsyncSession provided by get_db
sessionDep = Annotated[AsyncSession, Depends(get_db)]

@app.get("/api/cars", response_model=list[CarModel])
async def get_cars(session: sessionDep):
    cars = select(Car)
    result = await session.execute(cars)
    if result is None:
        raise HTTPException(status_code=500, detail="Error retrieving cars")
    return result.scalars().all()


@app.post("/api/cars", response_model=CarModel)
async def add_car(car: CarAddModel, session: sessionDep):
    new_car = Car(
        brand=car.brand,
        max_speed=car.max_speed,
        engine_power=car.engine_power
)
    session.add(new_car)
    await session.commit()
    await session.refresh(new_car)
    return new_car


@app.delete("/api/cars/{car_id}")
async def delete_car(car_id: int, session: sessionDep):
    query = select(Car).where(Car.id == car_id)
    result = await session.execute(query)
    car = result.scalar_one_or_none()
    if car is None:
        raise HTTPException(status_code=404, detail="Car not found")
    await session.delete(car)
    await session.commit()
    return {"message": "Car deleted successfully"}


@app.put("/api/cars/{car_id}", response_model=CarModel)
async def update_car(car_id: int, car: CarAddModel, session: sessionDep):
    query = select(Car).where(Car.id == car_id)
    result = await session.execute(query)
    existing_car = result.scalar_one_or_none()
    if existing_car is None:
        raise HTTPException(status_code=404, detail="Car not found")
    existing_car.brand = car.brand
    existing_car.max_speed = car.max_speed
    existing_car.engine_power = car.engine_power
    await session.commit()
    await session.refresh(existing_car)
    return existing_car
