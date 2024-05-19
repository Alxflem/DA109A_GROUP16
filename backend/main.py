from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS from flask_cors
import asyncio
from recipeRequest import getMeals
from translate_text import translate_text
from calculate_price import calculate_price
from willys import get_milk
from data_manager import DatabaseManager

db = DatabaseManager()
milk_price = get_milk()
db.insert_milk_price(milk_price)
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

@app.route('/v1/prices', methods=['POST'])
def calculate_price_route():
    try:
        # Manuell validering av indata
        ingredients = request.json
        if not isinstance(ingredients, list):
            raise ValueError("Ingredients must be a list")
        for item in ingredients:
            if not isinstance(item, dict) or 'name' not in item or 'weight' not in item:
                raise ValueError("Invalid ingredient format")
            if not isinstance(item['name'], str) or not isinstance(item['weight'], (int, float)):
                raise ValueError("Invalid ingredient data types")

         # Anpassning för calculate_price funktionen
        formatted_ingredients = [(item['name'], item['weight']) for item in ingredients]  # Skapa tupler

        # Beräkna priset
        price = calculate_price(formatted_ingredients)

        return jsonify({'price': price})
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(debug=True)