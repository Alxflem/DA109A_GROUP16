import { useState } from 'react';
import { useRecipeContext } from './RecipeContext';

function SearchContainer() { 
  const { addRecipe, clearRecipes } = useRecipeContext(); //This is a custom hook that will be used to access the recipe context
  const [loading, setLoading] = useState(false); //This is a state variable that will be used to store the loading state of the search button
  
  // This function will be called when the search button is clicked
  // It will fetch the data from the backend and add the recipes to the recipe context
  // The recipe context is a global state that can be accessed by any component
  const handleSearch = async () => {

    if(searchTerm !== ''){
      clearRecipes();
      let data = []
      try {
        setLoading(true);
        try {
          const response = await fetch(`http://127.0.0.1:5000/?query=${searchTerm}`);
  
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          data = await response.json();
          console.log(data);
        } catch (error) {
            console.error('Error:', error.message);
        }

        // Extract label and ingredientLines for each recipe object in the json file
        data.forEach((object) => {
          const label = object.label;
          const image = object.image;
          const ingredientLines = object.ingredientLines;
          const newRecipe = { name: label, ingredients: ingredientLines, imageUrl: image }; //Create a new recipe object

          console.log(image);
          addRecipe(newRecipe);
        });
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      }
      finally{
        setLoading(false);
      }
    }
  };

  // This state variable will be used to store the search term
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
      <div className="search-container">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <br/>
        <button className="btn btn-dark" onClick={handleSearch} disabled={loading}>
          {loading ? ( //This is a ternary operator, it is used to conditionally render a spinning circle when loading
            <>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span className="visually-hidden">Loading...</span>
            </>
          ) : (
            'Search'
          )}
        </button>
      </div>
    </div>
  );
}

export default SearchContainer;
