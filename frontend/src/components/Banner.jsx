import React from 'react';
import './Banner.css'; // Create a CSS file for custom styles

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-overlay">
        <div className="banner-text">
          <h1>Search among thousands of recipes</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
