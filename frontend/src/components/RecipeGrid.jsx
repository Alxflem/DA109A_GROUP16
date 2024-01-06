import Recipe from "./Recipe";
import { useRecipeContext } from './RecipeContext';

function RecipeGrid(){
    const {recipes} = useRecipeContext(); //This context is used to make communication between components easier   

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
            />
          ))}
        </div>
      </div>
    );
  }

export default RecipeGrid;