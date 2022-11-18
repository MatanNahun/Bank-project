from pydantic import BaseModel


class Transaction(BaseModel):

    id: int = None
    name: str = None
    amount: float
    category: str = None
    vendor: str = None

    def set_id(self, id):
        self.id = id

    def __str__(self):
        return f"""id: {self._id}
                amount: {self._amount}
                vendor: {self._vendor}
                category: {self._category}"""
