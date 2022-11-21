from fastapi import APIRouter, HTTPException, status
from ..errors import transactionIdNotExist
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
    try:
        return Transactions.delete_transaction(id)
    except transactionIdNotExist as e:
        print(e)
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=e.message)
