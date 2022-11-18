import requests
import uvicorn
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from routers import transactions_api, users_api


app = FastAPI()

app.include_router(transactions_api.router)
app.include_router(users_api.router)


@app.get("/")
def sanity():
    return {"message": "Server is up and running in sanity"}


# @app.get("/transactions")
# def getTransactions():
#     return Transactions.get_all_transactions()


# @app.post("/transactions")
# async def addTransaction(request: Request):
#     req = await request.json()
#     Transactions.add_transaction(
#         req["name"], req["amount"], req["category"], req["vendor"]
#     )
#     return req


# @app.delete("/transactions")
# async def deleteTransaction(request: Request):
#     req = await request.json()
#     Transactions.delete_transaction(req["id"])
#     return req


# @app.get("/transactions/categories")
# def getBreakdownTransctionsByCategory():
#     return Transactions.getBreakdownTransctionsByCategory()


origins = ["http://localhost", "http://localhost:8000", "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
