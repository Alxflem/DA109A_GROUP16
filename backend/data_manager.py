import psycopg2

class DatabaseManager:
    """
    A class to manage database connections and operations in PostGreSQL.

    Attributes:
        dbname, user, password, host, port: Credentials for DB connection.
        connection, cursor: Handles the DB connection and operations.

    Methods:
        connect(): Connects to the DB and creates a cursor.
        disconnect(): Closes the DB connection and cursor.
        get_product_by_name(name): Fetches a product by name from the DB.
    """

    def __init__(self):
        self.dbname = "da109a_g16"
        self.user = "an7910"
        self.password = "7w5qwujo"
        self.host = "pgserver.mau.se"
        self.port = "5432"

        self.connection = None
        self.cursor = None

    def connect(self):
        """
        Establishes a connection to the PostGreSQL database and creates a cursor object.
        """
        try:
            self.connection = psycopg2.connect(
                dbname=self.dbname,
                user=self.user,
                password=self.password,
                host=self.host,
                port=self.port
            )
            print("Connected to the database!")

            self.cursor = self.connection.cursor()

        except Exception as e:
            print("Error: Unable to connect to the database")
            print(e)

    def disconnect(self):
        """
        Closes the cursor and the connection to the database.
        """

        if self.connection:
            self.cursor.close()
            self.connection.close()
            print("Connection closed.")

    def get_product_by_name(self, name):
        
        """
        Fetches one product with a name similar to the provided name from the database.

        Args:
            name (str): The product name to search for.

        Returns:
            tuple: The first matching product, or None if no match is found.
        """

        if not self.connection:
            self.connect()
        
        query = f"""SELECT * FROM product ORDER BY SIMILARITY(name, '{name}') DESC LIMIT 1;"""

        try:
            self.cursor.execute(query)

            results = self.cursor.fetchone()

            if not results:
                print("No products found with similar names.")
                return None

            return results

        except Exception as e:
            print("Error: unable to fetch data")
            print(e)

    def get_price_by_barcode(self, barcode):
        """
        Fetches the price of the product by barcode

        Args:
            barcode (str): The product barcode to search for.

        Returns:
            tuple: The compare price unit and compare price of the product
        """

        if not self.connection:
            self.connect()
        
        query = f"""SELECT compare_price_unit, compare_price FROM willys_articles WHERE barcode = '{barcode}' LIMIT 1;"""

        try:
            self.cursor.execute(query)

            results = self.cursor.fetchone()

            if not results:
                print("Barcode not found.")
                return None

            return results

        except Exception as e:
            print("Error: unable to fetch data")
            print(e)

    def insert_milk_price(self, price):
        if not self.connection:
            self.connect()

        query = f"""UPDATE willys_articles set compare_price = {price} WHERE barcode = '7340083443893'"""

        self.cursor.execute(query)
        self.connection.commit()
