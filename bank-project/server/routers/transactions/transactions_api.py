from fastapi import APIRouter, Request

from DB.Transcations import Transactions


router = APIRouter()


@router.get("/transactions")
def getTransactions():
    return Transactions.get_all_transactions()


@router.post("/transactions")
async def addTransaction(request: Request):
    req = await request.json()
    Transactions.add_transaction(
        req["name"], req["amount"], req["category"], req["vendor"]
    )
    return req


@router.delete("/transactions")
async def deleteTransaction(request: Request):
    req = await request.json()
    Transactions.delete_transaction(req["id"])
    return req


@router.get("/transactions/categories")
def getBreakdownTransctionsByCategory():
    return Transactions.getBreakdownTransctionsByCategory()
