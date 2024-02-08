import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchContainer from './components/SearchContainer';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import RecipeGrid from './components/RecipeGrid';
import { RecipeProvider } from './components/RecipeContext';
import RecipeDetails from './components/RecipeDetails';
import About from './components/About';


function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const handleRecipeClick = (recipe) => {
    // Set the selected recipe when a recipe card is clicked
    setSelectedRecipe(recipe);
  };

  const handleBackToGrid = () => {
    // Clear the selected recipe when going back to the grid view
    setSelectedRecipe(null);
  };
  
  //This is the main page that will be rendered when the app is loaded
  const mainPage = () => {
    return (
      <>
        <Banner/>
        <SearchContainer/>
        <RecipeGrid onRecipeClick={handleRecipeClick}/>
      </>
    );
  };

  const[currentView, setCurrentView] = useState(mainPage);

  const changeView  = (newView) => {
    if(newView === "About"){
      setSelectedRecipe(null);
      setCurrentView(<About/>);
      return;
    }
    else if(newView === "Home"){
      setSelectedRecipe(null);
      setCurrentView(mainPage);
      return;
    }
  };

  //This is the main component that will be rendered by the index.jsx file
  //It will be used to wrap all the other components
  //Refrain from adding too many regular HTML elements here, instead, add them to the components that will be wrapped by App
  return (
    <>
      <NavBar change={changeView}/>
      <div className='outer-container'>
      {selectedRecipe ? (
          <RecipeProvider>
            <RecipeDetails recipe={selectedRecipe} onBackToGrid={handleBackToGrid}/>
          </RecipeProvider>
        ) : (
          <>
          <RecipeProvider>
            {currentView}
          </RecipeProvider>
          </>
        )}
      </div>
    </>
  );
}

export default App;