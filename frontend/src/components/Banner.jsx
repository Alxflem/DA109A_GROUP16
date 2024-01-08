import React from 'react';
import './Banner.css'; 

// This component will be used to render the banner
//It contains a background image and some text
//Most of the styling is done in the Banner.css file
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
