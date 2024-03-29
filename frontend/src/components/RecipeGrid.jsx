import Recipe from "./Recipe";
import { useRecipeContext } from './RecipeContext';
import { useEffect } from "react";

function RecipeGrid({onRecipeClick}){
    const {recipes, addRecipe} = useRecipeContext(); //This context is used to make communication between components easier   
    const handleClick = (recipe) => {
      // Call the onRecipeClick function with the selected recipe
      onRecipeClick(recipe);
    };

    //This useEffect hook will be called when the component is mounted
    useEffect(() => {
      addRecipe(null); //This will re-render the recipe grid when loaded.
    },[]);

    //The list of recipes is mapped to a list of Recipe components
    //The list gets updated whenever the recipes state changes in the RecipeProvider wrapper
    return (
      <div className="container">
        <div className="row">
          {recipes.map((recipe, index) => ( 
            <Recipe //Passing the name, ingredients and imageUrl as props
              key={index}
              name={recipe.name}
              ingredients={recipe.ingredients}
              imageUrl={recipe.imageUrl}
              onClick={() => handleClick(recipe)} 
              price={recipe.price}
            />
          ))}
        </div>
      </div>
    );
  }

export default RecipeGrid;