import { useState } from 'react';
import RecipeGrid from './RecipeGrid';
import { useRecipeContext } from './RecipeContext';
import json from '../assets/response_data_filtered.json';

function SearchContainer() { 
  const { addRecipe, clearRecipes } = useRecipeContext();
  const [loading, setLoading] = useState(false);
  // This function will be called when the user clicks the search button
  // It will fetch data from the API and add it to the recipe context
  // The recipe context will then be used to render the recipes
  //However, for now, it will just add some dummy data to the recipe context
  const handleSearch = async () => {

    if(searchTerm !== ''){
      clearRecipes();
      console.log('Searching for:', searchTerm);
    
      try {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 2000)); //Simulate a delay of 2 seconds
        
        const data = json; //Dummy data fetched

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
