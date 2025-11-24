from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from sqlalchemy.orm import declarative_base

from core.config import settings

Base = declarative_base()

engine = create_async_engine(settings.database_url, echo=True)


Session_local = async_sessionmaker(
    autocommit=False, autoflush=False, bind=engine, class_=AsyncSession
    )

async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with Session_local() as session:
        yield session
