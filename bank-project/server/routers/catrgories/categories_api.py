from fastapi import APIRouter, Request
from DB.CategoriesDbManager import Categories


router = APIRouter()


@router.get("/categories/breakdown")
def getBreakdownTransctionsByCategory():
    return Categories.getBreakdownTransctionsByCategory()
