from connectionToDB import connection

categoriesInitialator = ["transportation", "food", "entertainment", "clothes", "other"]


class Categories:
    def insert_categories():
        for category in categoriesInitialator:
            try:
                with connection.cursor() as cursor:
                    query = f'INSERT INTO categories(name) VALUES("{category}");'
                    cursor.execute(query)
                    result = cursor.fetchall()
                    connection.commit()
                    print(result)
            except Exception as e:
                print(e)

    def get_all_categories():
        try:
            with connection.cursor() as cursor:
                query = f"""
                        SELECT *
                        FROM Categories
                        """
                cursor.execute(query)
                CategoriesTable = cursor.fetchall()
                print(CategoriesTable)
        except Exception as e:
            print(e)

    def getBreakdownTransctionsByCategory():
        try:
            with connection.cursor() as cursor:
                query = f"""
                            SELECT category, SUM(amount) FROM transactions GROUP BY category
                            """
                cursor.execute(query)
                result = cursor.fetchall()
                print(result)
                return result
        except Exception as e:
            print(e)


# Categories.insert_categories()

# Categories.get_all_categories()
