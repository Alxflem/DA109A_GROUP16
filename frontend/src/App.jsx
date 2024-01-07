import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchContainer from './components/SearchContainer';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import RecipeGrid from './components/RecipeGrid';
import { RecipeProvider } from './components/RecipeContext';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    // Set the selected recipe when a recipe card is clicked
    setSelectedRecipe(recipe);
  };

  const handleBackToGrid = () => {
    // Clear the selected recipe when going back to the grid view
    setSelectedRecipe(null);
    addRecipe(null);
  };

  //This is the main component that will be rendered by the index.jsx file
  //It will be used to wrap all the other components
  //Refrain from adding too many regular HTML elements here, instead, add them to the components that will be wrapped by App
  return (
    <>
      <NavBar/>
      <div className="outer-container">
        {selectedRecipe ? (
          <RecipeProvider>
            <RecipeDetails recipe={selectedRecipe} onBackToGrid={handleBackToGrid}/>
          </RecipeProvider>
        ) : (
          <>
            <Banner/>
            <RecipeProvider>
              <SearchContainer/>
              <RecipeGrid onRecipeClick={handleRecipeClick}/>
            </RecipeProvider>
          </>
        )}
      </div>
    </>
  );
}

export default App;