import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchContainer from './components/SearchContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
      <NavBar/>
      <div className="outer-container">
        <SearchContainer/>
      </div>
    </>
  );
}

export default App;
