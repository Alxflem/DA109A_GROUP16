from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS from flask_cors
import asyncio
from recipeRequest import getMeals
from translate_text import translate_text
from calculate_price import calculate_price

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in the app

async def get_meals_async(query):
    return await getMeals(query)

@app.route('/', methods=['GET'])
def get_data():
    # Extract the query parameter from the GET request
    query = request.args.get('query')

    # Check if the query is empty or None
    if not query:
        return jsonify({'error': 'Query parameter is missing or empty'}), 400

    try:
        # Run the asynchronous function and get the result
        filtered_data = asyncio.run(get_meals_async(query))

        for data in filtered_data:
            try:
                ingredients_separated = [(i['food'], i['weight']) for i in data["ingredients"] if 'food' in i and 'weight' in i]
                
                result = ','.join([item[0] for item in ingredients_separated])
                result = translate_text(result, "sv").split(", ")

                new_list = [(result[i], ingredients_separated[i][1]) for i in range(len(ingredients_separated))]

                data["price"] = calculate_price(new_list)
            except Exception as e:
                print(f"An unexpected error occurred: {e}")

        # Return the data as a JSON response
        return jsonify(filtered_data)

    except Exception as e:
        # Log the exception for debugging purposes
        print(f"An unexpected error occurred: {e}")
        return jsonify({'error': 'An unexpected error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True)
