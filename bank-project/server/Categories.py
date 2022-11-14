from connectionToDB import connection

categoriesInitialData = ["transportation", "food", "entertainment"]


class Categories:
    def insert_categories():
        for category in categoriesInitialData:
            try:
                with connection.cursor() as cursor:
                    query = f'INSERT INTO categories(name) VALUES("{category}");'
                    cursor.execute(query)
                    connection.commit()
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

    def delete_transaction():
        try:
            with connection.cursor() as cursor:
                query = f'INSERT INTO categories(name) VALUES("{category}");'
                cursor.execute(query)
                connection.commit()
        except Exception as e:
            print(e)


# Categories.insert_categories()

Categories.get_all_categories()
