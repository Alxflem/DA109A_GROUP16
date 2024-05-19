import requests
import json
import time

class Willys:
    def __init__(self):
        self.url = "https://www.willys.se"

        self.sortiments = [
            "kott-chark-och-fagel",
            "frukt-och-gront",
            "mejeri-ost-och-agg",
            "skafferi",
            "brod-och-kakor",
            "fryst",
            "fisk-och-skaldjur",
            "vegetariskt",
            "glass-godis-och-snacks",
            "dryck",
            "fardigmat"
        ]

    def get_all_products(self, rate):
        """
        Returns all products sold by Willys

        :params rate: The rate in milliseconds between each request
        :type rate: number

        :return:    All Willys' products
        :rtype: dict
        """

        print("Getting all products...")

        all_products = []
        for sortiment in self.sortiments:
            print(f"Requesting {sortiment} with {self.url}/c/{sortiment}?size=100")
            response = requests.get(f"{self.url}/c/{sortiment}?size=100")
            pagination = (json.loads(response.text))["pagination"]
            pages = pagination["numberOfPages"]

            for i in range(pages):
                print(f"Requesting {sortiment} page {i}/{pages - 1}")
                response = requests.get(f"{self.url}/c/{sortiment}?size=100&page={i}")
                products = (json.loads(response.text))["results"]

                for product in products:
                    product["sortiment"] = sortiment

                all_products += products

                time.sleep(rate/1000)

        return all_products
    
    def get_compare_price(self, product):
        """
        Returns the compare price for the product (kr/kg or kr/l)

        :param product: The product which you want information about
        :type product:  dict

        :return: Compare price for product
        :rtype: number
        """

        price = 0
        try:
            price = float(product["comparePrice"].replace(
                ",", ".").replace("kr", "").replace(" ", ""))
        except:
            print(f"Could not convert {product['comparePrice']} to float")

        return price
    
    def get_product_code(self, product):
        """
        Returns the store's code for a product
        (Used to get nutrition values)

        :param product: The product which you want information about
        :type product:  dict

        :return: Product code
        :rtype: text
        """

        return product["code"]