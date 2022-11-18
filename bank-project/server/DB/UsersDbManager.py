from DB.connectionToDB import connection


class Users:
    def insert_user():
        try:
            with connection.cursor() as cursor:
                query = f"INSERT INTO users(balance) VALUES(0);"
                cursor.execute(query)
                result = cursor.fetchall()
                print(result)
                connection.commit()
        except Exception as e:
            print(e)

    def get_balance():
        try:
            with connection.cursor() as cursor:
                query = f"SELECT balance FROM users WHERE id = 1"
                cursor.execute(query)
                result = cursor.fetchall()
                print(result)
                connection.commit()
                return result
        except Exception as e:
            print(e)


# Users.insert_user()
