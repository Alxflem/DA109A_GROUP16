from data_manager import DatabaseManager

def calculate_price(ingredients):
    """
    Calculates the total price of a recipe.

    Parameters:
    ingredients (list of dict): A list of ingredients with 'food' and 'weight' keys.

    Returns:
    float: The total price of the ingredients.

    Example:
    recipe = [
        {"food": "olivolja", "weight": 108.0},
        {"food": "vitlök klass 1", "weight": 15.0},
        {"food": "potatis", "weight": 738.0}
    ]
    """
    
    db_manager = DatabaseManager()
    
    price = sum(float(db_manager.get_price_by_barcode(db_manager.get_product_by_name(i[0])[0])[1]) * i[1] / 1000 for i in ingredients)
    
    db_manager.disconnect()

    return price