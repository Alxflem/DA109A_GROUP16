import requests
import json
import asyncio

async def getMeals(query):
    # Replace 'YOUR_APP_ID' and 'YOUR_APP_KEY' with your Edamam API credentials
    app_id = '27177ca1'
    app_key = '0423730fa1b43b7addd7e51722053653'

    # API endpoint
    url = 'https://api.edamam.com/api/recipes/v2'

    # Parameters for the GET request
    params = {
        'type': 'public',
        'q': query,
        'app_id': app_id,
        'app_key': app_key,
    }

    # Make the GET request
    response = requests.get(url, params=params)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Parse JSON response
        data = response.json()

        # Filter fields to include only specific keys
        filtered_data = []
        for hit in data.get('hits', []):
            recipe = hit.get('recipe', {})
            filtered_recipe = {
                'uri': recipe.get('uri'),
                'label': recipe.get('label'),
                'image': recipe.get('image'),
                'images': recipe.get('images'),
                'ingredientLines': recipe.get('ingredientLines'),
                'ingredients': recipe.get('ingredients'),
                'instructionLines': recipe.get('instructions'),
            }
            print(recipe.get('instructionLines'))
            filtered_data.append(filtered_recipe)

        return filtered_data
    else:
        # Print an error message if the request was not successful
        print(f"Error: {response.status_code} - {response.text}")

