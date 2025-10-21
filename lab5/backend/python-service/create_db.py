from sqlalchemy import create_engine, text
from config import settings

def create_database():
    # Підключаємося до postgres (стандартна база)
    admin_url = f"postgresql://{settings.DB_USER}:{settings.DB_PASSWORD}@{settings.DB_HOST}:{settings.DB_PORT}/postgres"
    engine = create_engine(admin_url)
    
    with engine.connect() as conn:
        # Перевіряємо, чи існує база
        result = conn.execute(text(f"SELECT 1 FROM pg_database WHERE datname='{settings.DB_NAME}'"))
        if not result.fetchone():
            # Створюємо базу, якщо не існує
            conn.execute(text("COMMIT"))
            conn.execute(text(f"CREATE DATABASE {settings.DB_NAME}"))
            print(f"Database {settings.DB_NAME} created successfully!")
        else:
            print(f"Database {settings.DB_NAME} already exists.")

if __name__ == "__main__":
    create_database()