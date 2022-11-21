from fastapi import APIRouter, HTTPException, status
from ..errors import transactionIdNotExist
from .transactions import Transaction

from DB.TranscationsDbManager import Transactions


router = APIRouter()


@router.get("/transactions", status_code=status.HTTP_200_OK)
def getTransactions():
    try:
        return Transactions.get_all_transactions()
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=e)


@router.post("/transactions", status_code=status.HTTP_201_CREATED)
def addTransaction(transaction: Transaction):
    try:
        return Transactions.add_transaction(transaction)
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=e)


@router.delete("/transactions/{id}", status_code=status.HTTP_200_OK)
def deleteTransaction(id):
    try:
        return Transactions.delete_transaction(id)
    except transactionIdNotExist as e:
        print(e)
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=e.message)
