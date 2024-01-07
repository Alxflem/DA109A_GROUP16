from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS from flask_cors
import asyncio
from recipeRequest import getMeals

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

        # Return the data as a JSON response
        return jsonify(filtered_data)

    except Exception as e:
        # Log the exception for debugging purposes
        print(f"An unexpected error occurred: {e}")
        return jsonify({'error': 'An unexpected error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True)
