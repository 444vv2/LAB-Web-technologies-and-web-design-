import asyncio
from sqlalchemy import text
from database import engine, Base
import models  # noqa: F401  # Імпортуємо для реєстрації моделей у Base.metadata

async def init_models():
    async with engine.begin() as conn:
        await conn.execute(text("SELECT 1"))
        await conn.run_sync(Base.metadata.create_all)


if __name__ == "__main__":
    asyncio.run(init_models())
