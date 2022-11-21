class transactionIdNotExist(Exception):
    def __init__(self, *args: object) -> None:
        super().__init__(*args)
        self.message = "ERROR: transaction id not exist."
