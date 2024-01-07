import React from 'react';

const RecipeDetails = ({ recipe, onBackToGrid }) => {
  return (
    <div className="container text-center mt-5">
      <img
        src={recipe.imageUrl}
        alt={recipe.name}
        className="img-fluid rounded-top mb-3"
      />

      <h1>{recipe.name}</h1>
      <h2 className="mb-4">Ingredients:</h2>
      <ul className="list-group list-group-flush text-left">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="list-group-item">
            {ingredient}
          </li>
        ))}
      </ul>

      <button className="btn btn-dark mt-3" onClick={onBackToGrid}>
        Back to Recipes
      </button>
    </div>
  );
};

export default RecipeDetails;
