import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomNavbar.css'; // Custom CSS for the navbar

const CustomNavbar = ({ change }) => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    // Toggle the menu to show or hide when the hamburger is clicked
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-danger fixed-top ${isNavOpen ? 'show' : ''}`}>
      <a className="navbar-brand" href="#home">KAMEO Recipes</a>
      <button className="navbar-toggler" type="button" onClick={toggleNav}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#home" onClick={() => {change('Home'); toggleNav();}}>Home</a>
          </li>
          <li className="nav-item">
            {/* Pass a function reference to onClick, not the result of the function call */}
            <a className="nav-link" href="#about" onClick={() => {change('About'); toggleNav();}}>About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
