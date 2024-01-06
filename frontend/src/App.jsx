import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchContainer from './components/SearchContainer';
import NavBar from './components/NavBar';
import Banner from './components/Banner';


function App() {
  const [view, setView] = useState(null);
  
  return (
    <>
      <NavBar/>
      <div className="outer-container">
        <Banner/>
        {view}
        <SearchContainer/>
      </div>
    </>
  );
}

export default App;
