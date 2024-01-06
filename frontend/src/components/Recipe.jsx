import React from 'react';

// This component will be used to render a single recipe
// It will be used in the RecipeGrid component
// It will receive the name, ingredients and imageUrl as props
const Recipe = ({ name, ingredients, imageUrl }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        {imageUrl && (
          <img src={imageUrl} className="card-img-top" alt={name} style={{ maxHeight: '200px', objectFit: 'cover' }} />
        )}
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <ul className="list-group list-group-flush" style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item small">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
