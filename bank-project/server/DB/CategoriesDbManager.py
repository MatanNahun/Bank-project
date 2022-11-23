from DB.connectionToDB import connection

categoriesInitialator = [
    "transportation",
    "food",
    "entertainment",
    "clothes",
    "other",
]  # to DB


class Categories:
    def insert_categories():
        for category in categoriesInitialator:
            try:
                connection.ping()
                with connection.cursor() as cursor:
                    query = f'INSERT INTO categories(name) VALUES("{category}");'
                    cursor.execute(query)
                    cursor.fetchall()
                    connection.commit()
            except Exception as e:
                print(e)

    def get_all_categories():
        try:
            connection.ping()
            with connection.cursor() as cursor:
                query = f"""
                        SELECT *
                        FROM Categories
                        """
                cursor.execute(query)
                return cursor.fetchall()
        except Exception as e:
            print(e)

    def getBreakdownTransctionsByCategory():
        try:
            connection.ping()
            with connection.cursor() as cursor:
                query = f"""
                            SELECT category, SUM(amount) as totalAmount FROM transactions GROUP BY category
                            """
                cursor.execute(query)
                result = cursor.fetchall()
                return result
        except Exception as e:
            print(e)
