import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
from psycopg2 import connect, sql
from alembic import command


# app = FastAPI(
#     title="Backend API", description="FastAPI Hello World Application", version="1.0.0"
# )
app = FastAPI()


class User(BaseModel):
    name: str
    age: int
    email: str


@app.get("/")
def hello_world():
    return {"message": "Hello World from FastAPI!"}


@app.get("/users/{id}")
async def get_users(id: int):  # ✅ type annotation
    print(id)
    return {"user_id": id}


#  annotations


# @app.get("/users")
# async def getUsers(page: int, limit: int, search: str, aman: str):
#     print("this is page  ", page, "this is limit  ", limit)

#     return {"page": page, "limit": limit, "search": search, "aman": aman}


@app.post("/users")
async def create_user(user: User):  # ✅ type annotation
    print(user)
    return {"message": "User created successfully", "user": user}


#  /create_user
# body: {name: "Aman", age: 22, email: "aman@example.com"}


def start_dev():
    """Development server with auto-reload"""
    uvicorn.run(
        "back_end.main:app",  # Important: module path
        host="127.0.0.1",
        port=8000,
        reload=True,
        reload_dirs=["./src"],  # Reload src directory
    )
