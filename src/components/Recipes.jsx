import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "./Card";
import { recipecontext } from "../contexts/RecipeContext";
const Recipes = () => {
  const [recipe, setrecipe] = useContext(recipecontext);
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(recipe);
    setrecipe(JSON.parse(localStorage.getItem("recipe")) || []);
  }, []);
  return recipe ? (
    <div className="mb-10">
      <h1 className="text-center text-2xl font-semibold mb-5">OUR RECIPES</h1>
      <p className="text-center mb-20 lg:mb-0 text-zinc-400 lg:text-lg text-sm lg:w-[400px] lg:ml-[25vw] ml-4 w-[300px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam?
      </p>
      <div className="recipe-cards mt-[5%]  flex flex-col lg:flex-row flex-wrap p-5">
        {recipe.length > 0 ? (
          recipe.map((r) => <Card key={r.id} recipe={r}  />)
        ) : (
          <h1 className="w-full text-green-600 text-3xl font-extrabold text-center mt-10">
            No Recipe Found
          </h1>
        )}
      </div>
      {pathname === "/recipes" && (
        <Link
          to="/create-recipe"
          className="cursor-pointer rounded-md absolute lg:top-[15%] top-[30%] py-2 px-5 lg:left-[18.5%] left-[50%] -translate-x-[50%]  bg-green-200 gap-x-3 flex items-center"
        >
          <i className="lg:text-3xl text-green-600 ri-add-box-line"></i>{" "}
          <h1 className="capitalize text-xs lg:text-lg">create recipes</h1>
        </Link>
      )}
    </div>
  ): (
    <h1 className="w-full text-center text-4xl text-green-600 mt-10">
        Loading Recipe...
    </h1>
  )
};

export default Recipes;
