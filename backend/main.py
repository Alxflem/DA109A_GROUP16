from flask import Flask, jsonify, request
from flask_cors import CORS 
import asyncio
from recipeRequest import getMeals
from translate_text import translate_text
from calculate_price import calculate_price
from willys import Willys
from data_manager import DatabaseManager
import argparse

db = DatabaseManager()

def update_willys():
    print("Updating willys prices")
    willys = Willys()
    prods = willys.get_all_products(1000)

    articles = []
    for prod in prods:
        price = willys.get_compare_price(prod)
        article_id = willys.get_product_code(prod)
        articles.append({'compare_price': price, 'article_id': article_id})

    db.bulk_insert_product_price(articles)
    db.disconnect()

app = Flask(__name__)
CORS(app)


async def get_meals_async(query):
    return await getMeals(query)

@app.route('/v1/recipes', methods=['GET'])
def get_recipes():
    query = request.args.get('query')
    if not query:
        return jsonify({'error': 'Query parameter is missing'}), 400

    try:
        filtered_data = asyncio.run(get_meals_async(query))
        
        # Beräkna priset för varje recept och lägg till i svaret.
        for data in filtered_data:
            data["price"] = calculate_price_for_recipe(data)

        return jsonify(filtered_data)
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Internal server error'}), 500


# Hjälpfunktion för att beräkna priset för ett recept
def calculate_price_for_recipe(recipe_data):
    try:
        ingredients = [(i['food'], i['weight']) for i in recipe_data["ingredients"] if 'food' in i and 'weight' in i]
        translated_ingredients = [(translate_text(name, "sv"), weight) for name, weight in ingredients]
        print(translated_ingredients)
        return calculate_price(translated_ingredients)
    except Exception as e:
        print(f"Error calculating price for recipe: {e}")
        # Om prisberäkning misslyckas, returnera 0 eller något annat defaultvärde
        return 0

@app.route('/v1/prices', methods=['GET'])
def calculate_price_route():
    try:
        # Hämta ingredienser från query-parametrar
        ingredients = request.args.getlist('ingredients')

        if not ingredients:
            raise ValueError("Ingredients are required")
        formatted_ingredients = []
        for ingredient_str in ingredients:
            try:
                name, weight_str = ingredient_str.split(',')
                weight = float(weight_str)
                formatted_ingredients.append((name, weight))
            except ValueError:
                raise ValueError("Invalid ingredient format (should be 'name,weight')")

        # Beräkna priset
        price = calculate_price(formatted_ingredients)

        return jsonify({'price': price})
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Internal server error'}), 500


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-u', '--update', action='store_true', help='Run the update code')
    args = parser.parse_args()

    if args.update:
        update_willys()

    app.run(debug=True)
