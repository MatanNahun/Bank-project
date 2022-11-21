from DB.connectionToDB import connection
from routers.transactions.transactions import Transaction
from routers.errors import transactionIdNotExist

import pymysql


class Transactions:
    def is_transaction_exist(transaction_id: int) -> bool:
        with connection.cursor() as cursor:
            query = f"SELECT * FROM transactions WHERE id = {transaction_id}"
            cursor.execute(query)
            result = cursor.fetchall()
            print(result)
            return len(result) != 0

    def get_all_transactions():
        try:
            connection.ping()
            with connection.cursor() as cursor:
                query = f"""
                        SELECT *
                        FROM transactions
                        """
                cursor.execute(query)
                result = cursor.fetchall()
                print(result)
                return result
        except Exception as e:
            print(e)
            raise Exception("error: problem getting to DB")

    def add_transaction(transaction: Transaction):
        try:
            connection.ping()
            with connection.cursor() as cursor:
                queryInsertTranscation = f"""
                        INSERT INTO transactions(name, amount, category, vendor, user_id) VALUES ( '{transaction.name}', {transaction.amount}, '{transaction.category}', '{transaction.vendor}', 1 )
                        """
                queryUpdateUserBalance = f"""
                        UPDATE users SET balance = balance + {transaction.amount} WHERE id = 1
                        """
                cursor.execute(queryInsertTranscation)
                transaction.set_id(cursor.lastrowid)
                cursor.execute(queryUpdateUserBalance)
                cursor.fetchall()
                connection.commit()
                return transaction
        except Exception as e:
            print(e)
            raise Exception("error: problem with input transction")

    def delete_transaction(transactionID):
        if not Transactions.is_transaction_exist(transactionID):
            raise transactionIdNotExist()
        try:
            connection.ping()
            with connection.cursor() as cursor:
                queryDeleteTransaction = f"""
                        DELETE FROM transactions WHERE id = {transactionID}
                        """
                queryGetAmount = f"""
                SELECT amount FROM transactions WHERE id = {transactionID}
                """
                cursor.execute(queryGetAmount)
                TransactionAmount = cursor.fetchall()[0]["amount"]
                queryUpdateUserBalance = f"""
                        UPDATE users SET balance = balance - {TransactionAmount}  WHERE id = 1
                        """
                cursor.execute(queryDeleteTransaction)
                cursor.execute(queryUpdateUserBalance)
                result = cursor.fetchall()
                connection.commit()
                return result
        except Exception as e:
            print(e)
            raise Exception("error: problem getting to DB")

    def getBreakdownTransctionsByCategory():
        try:
            connection.ping()
            with connection.cursor() as cursor:
                query = f"""
                        SELECT category, SUM(amount) as totalAmount FROM transactions GROUP BY category
                        """
                cursor.execute(query)
                result = cursor.fetchall()
                connection.commit()
                print(result)
                return result
        except Exception as e:
            print(e)
            raise Exception("error: problem getting to DB")
