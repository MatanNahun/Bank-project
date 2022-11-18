from fastapi import APIRouter, Request
from DB.UsersDbManager import Users


# from DB.Users import Users

router = APIRouter()


@router.get("/balance")
def getBalance():
    return Users.get_balance()
