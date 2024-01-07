import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchContainer from './components/SearchContainer';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import RecipeGrid from './components/RecipeGrid';
import { RecipeProvider } from './components/RecipeContext';

function App() {
  const [view, setView] = useState(null);
  const [showSearch, setShowSearch] = useState(true);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    // Determine whether to show the search bar and banner based on the window location
    const currentPath = window.location.pathname;
    setShowSearch(currentPath !== '/about.html' && currentPath !== '/contact.html');
    setShowBanner(currentPath !== '/about.html' && currentPath !== '/contact.html');
  }, []);

  return (
    <>
      <NavBar />
      <div className="outer-container">
        {showBanner && <Banner />}
        <RecipeProvider>
          {showSearch && <SearchContainer />}
          <RecipeGrid />
        </RecipeProvider>
      </div>
    </>
  );
}

export default App;
