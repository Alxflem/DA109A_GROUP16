import React from 'react';
import alert from '../assets/alert.png';
const About = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <p className="lead">
            <strong>Search Functionality:</strong>
          </p>
          <p>You can search for recipes by using keywords like "Chicken" and "Rice" or by searching for complete recipes with the full name.</p>
          <p>Due to the nature of the search it can take a while to load in the different recipes. As long as you can see the loading animation it is working as intended.</p>
          <p>Note that the loading speed is greatly affected by your internet connection.</p>
          <br />
          <img src={alert} alt="An alert!" className='img-fluid'/>
          <p className="lead">
            <strong>Disclaimer:</strong>
          </p>
            <p>
                This website is a school project and is not intended for commercial use. The recipes are not guaranteed to be accurate and may not work as expected. The cost shown for each recipe is an estimate and may not always match the true price. Make sure to check the price at your local store.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
