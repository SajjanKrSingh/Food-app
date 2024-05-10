import React, { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const [recipe, setrecipe] = useState([]);
 useEffect(() => {
     setrecipe(JSON.parse(localStorage.getItem("recipe")) || []);
 }, []);
  return (
    <recipecontext.Provider value={[recipe, setrecipe]}>
    {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
