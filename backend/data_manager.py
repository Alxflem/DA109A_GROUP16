import psycopg2

class Manager:
    def __init__(self):
        self.dbname = "da109a_g16"
        self.user = "an7910"
        self.password = "7w5qwujo"
        self.host = "pgserver.mau.se"
        self.port = "5432"

        self.connection = None
        self.cursor = None

    def connect(self):
        try:
            self.connection = psycopg2.connect(
                dbname=self.dbname,
                user=self.user,
                password=self.password,
                host=self.host,
                port=self.port
            )
            print("Connected to the database!")

            # Create a cursor object to execute SQL queries
            self.cursor = self.connection.cursor()

        except Exception as e:
            print("Error: Unable to connect to the database")
            print(e)

    def disconnect(self):
        # Close the cursor and connection
        if self.connection:
            self.cursor.close()
            self.connection.close()
            print("Connection closed.")