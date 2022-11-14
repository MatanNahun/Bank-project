import pymysql

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="bank_transactions",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor,
)


def get_all_transactions():
    try:
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


def add_transaction(name, amount, category, vendor):
    try:
        with connection.cursor() as cursor:
            query = f"""
                    INSERT INTO transactions VALUES (null, '{name}', {amount}, '{category}', '{vendor}' )
                    """
            cursor.execute(query)
            result = cursor.fetchall()
            print(result)
    except Exception as e:
        print(e)
