import React from 'react';
import './Banner.css'; // Create a CSS file for custom styles

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-overlay">
        <div className="banner-text">
          <h1>Sök bland tusentals recept</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
