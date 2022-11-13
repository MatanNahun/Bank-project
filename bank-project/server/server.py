import requests
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from queries import get_all_transactions

app = FastAPI()


@app.get("/")
def sanity():
    get_all_transactions()
    return {"message": "Server is up and running in sanity"}


@app.get("/transactions")
def getTransactions():
    return get_all_transactions()


origins = ["http://localhost", "http://localhost:3000", "http://localhost:8000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
