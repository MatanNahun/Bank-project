from connectionToDB import connection


class Transactions:
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
                        INSERT INTO transactions(name, amount, category, vendor, user_id) VALUES ( '{name}', {amount}, '{category}', '{vendor}', 1 )
                        """
                cursor.execute(query)
                connection.commit()
        except Exception as e:
            print(e)


# Transactions.add_transaction("car", 10, "music", "dekel")

# Transactions.get_all_transactions()
