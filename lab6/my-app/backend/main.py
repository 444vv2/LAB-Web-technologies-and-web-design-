from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from api.car_stock_api import router as car_stock_router

app = FastAPI(title="Hot Wheels Shop API", version="1.0.0")

# CORS для підключення з React та Swagger UI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Дозволяємо всі джерела для розробки
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(car_stock_router)

@app.get("/")
async def root():
    """Головна сторінка API"""
    return {"message": "Hot Wheels Shop API", "version": "1.0.0", "status": "active"}

@app.get("/health")
async def health_check():
    """Перевірка здоров'я API"""
    return {"status": "healthy"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
