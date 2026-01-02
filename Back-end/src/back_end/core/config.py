from pydantic import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    # Database
    database_url: str

    # Security
    secret_key: str
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    # App
    app_name: str = "FastAPI PostgreSQL App"
    debug: bool = False

    class Config:
        env_file = ".env"


# Global settings instance
settings = Settings()
