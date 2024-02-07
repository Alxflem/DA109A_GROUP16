import requests

def get_milk():
    response = requests.get("https://www.willys.se/axfood/rest/p/101233933_ST")
    obj = response.json()

    cleaned_string = obj["comparePrice"].replace(",", ".").replace(" kr", "")
    number = float(cleaned_string)
    return number