import React, { createContext, useContext, useState } from 'react'; //Importing the required modules

//RecipeContext is the context that will be used to share data between components
const RecipeContext = createContext();

//useRecipeContext is a custom hook that can be used to access the context
export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

//RecipiProvider is a wrapper component that will be used to wrap the components that need to access the context
export const RecipeProvider = ({ children }) => { 
  const [recipes, setRecipes] = useState([
    {
        name: 'Pasta',
        ingredients: ['Pasta', 'Tomato Sauce', 'Cheese'],
      },
      {
        name: 'Salad',
        ingredients: ['Lettuce', 'Tomato', 'Cucumber'],
      },
  ]);

  //It uses a combination of useState and createContext to create a context that can be used by other components
  //Wherever you need to access the context, you can use the useRecipeContext hook
  const addRecipe = (recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };
  const clearRecipes = () => {
    setRecipes([]);
  };

  //The chilrden prop is the component that will be wrapped by the RecipeProvider
  //Everything wrappen within RecipeProivder will have access to the context (recipes, addRecipe, clearRecipes)
  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, clearRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};
