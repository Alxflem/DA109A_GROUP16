import requests

def translate_text(text, dest_language):
    """
    Translates English text to a specified language using Google Translate's unofficial API.

    Args:
        text (str): Text to translate.
        dest_language (str): ISO 639-1 language code of target language.

    Returns:
        str: Translated text.
    """

    base_url = "https://translate.googleapis.com/translate_a/single"
    params = {
        "client": "gtx",
        "sl": "en",  # Source language, "auto" will let Google decide
        "tl": dest_language,  # Target language
        "dt": "t",  # Data type. "t" means text
        "q": text,  # The text to be translated
    }
    response = requests.get(base_url, params=params)
    result = response.json()
    return result[0][0][0]