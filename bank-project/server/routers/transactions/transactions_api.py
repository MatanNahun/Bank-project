from fastapi import APIRouter, Request
from .transactions import Transaction

from DB.TranscationsDbManager import Transactions


router = APIRouter()


@router.get("/transactions")
def getTransactions():
    return Transactions.get_all_transactions()


@router.post("/transactions")
async def addTransaction(transaction: Transaction):
    return Transactions.add_transaction(transaction)


@router.delete("/transactions/{id}")
async def deleteTransaction(id):
    return Transactions.delete_transaction(id)


@router.get("/categories")
def getBreakdownTransctionsByCategory():
    return Transactions.getBreakdownTransctionsByCategory()
