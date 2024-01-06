import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchContainer from './components/SearchContainer';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Recipe from './components/Recipe';
import RecipeGrid from './components/RecipeGrid';
import { RecipeProvider } from './components/RecipeContext';


function App() {
  const [view, setView] = useState(null); //Might be used to change the view of the page, ignore for now.

  //This is the main component that will be rendered by the index.jsx file
  //It will be used to wrap all the other components
  //Refrain from adding too many regular HTML elements here, instead, add them to the components that will be wrapped by App
  return (
    <>
      <NavBar/>
      <div className="outer-container">
        <Banner/>
        <RecipeProvider>
          <SearchContainer/>
          <RecipeGrid/>
        </RecipeProvider>
      </div>
    </>
  );
}

export default App;
