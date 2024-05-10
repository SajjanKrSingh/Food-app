import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../contexts/RecipeContext";
import { toast } from "react-toastify";

const Update = () => {
  const [recipe, setrecipe] = useContext(recipecontext);
  const nevigate=useNavigate()
  const params = useParams();
  const recipes = recipe && recipe.find((r) => r.id == params.id);
  const [image, setimage] = useState(recipes.image);
  const [title, settitle] = useState(recipes.title);
  const [discription, setdiscription] = useState(recipes.discription);
  const [ingredient, setingredient] = useState(recipes.ingredient);
  const [instruction, setinstruction] = useState(recipes.instruction);

  const updateRecipeHandler = (e) => {
    e.preventDefault();
    const updatedRecipes = {
      id: recipes.id,
      title,
      image,
      discription,
      ingredient,
      instruction,
    };
    const copyrecipe=[...recipe];
    const recipeindex=recipe.findIndex((r)=> r.id == params.id);
    copyrecipe[recipeindex]=updatedRecipes;
    setrecipe(updatedRecipes);

    localStorage.setItem("recipe", JSON.stringify(copyrecipe));
        toast.success("Recipe Updated Successfully!");
        nevigate("/recipes");
  };

  return recipes ? (
    <form onSubmit={updateRecipeHandler} className="w-[70%] m-auto  ">
      <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
        Update <br /> Existing Recipe
      </h1>
      <input
        onChange={(e) => {
          setimage(e.target.value);
        }}
        value={image}
        type="url"
        className="w-full border rounded-md px-5 py-2  text-xm font-light lg:text-lg lg:px-6 lg:py-3 text-lg mb-5 lg:placeholder:text-lg placeholder:text-sm"
        placeholder="Recipe Image URL"
      />
      <input
        onChange={(e) => {
          settitle(e.target.value);
        }}
        value={title}
        type="text"
        className="w-full border rounded-md px-5 py-2 text-xm font-light lg:text-lg lg:px-6 lg:py-3 text-lg mb-5 lg:placeholder:text-lg placeholder:text-sm"
        placeholder="Recipe Name"
      />
      <textarea
        onChange={(e) => {
          setdiscription(e.target.value);
        }}
        value={discription}
        className="w-full border rounded-md px-5 py-1 lg:px-6 lg:py-3 text-xm font-light lg:text-lg mb-5 lg:placeholder:text-lg placeholder:text-sm placeholder:py-5 lg:placeholder:py-0 "
        placeholder="recipe description..."
      ></textarea>
      <textarea
        onChange={(e) => {
          setingredient(e.target.value);
        }}
        value={ingredient}
        className="w-full border rounded-md px-5 py-1 lg:px-6 lg:py-3 text-xm font-light lg:text-lg text-lg mb-5 lg:placeholder:text-lg placeholder:text-xs placeholder:py-3"
        placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
      ></textarea>
      <textarea
        onChange={(e) => {
          setinstruction(e.target.value);
        }}
        value={instruction}
        className="w-full border rounded-md px-5 py-1 lg:px-6 lg:py-3 text-xm font-light lg:text-lg text-lg mb-5 lg:placeholder:text-lg placeholder:text-xs placeholder:py-3"
        placeholder="recipe instructions -> 'use comma to seperate instructions'..."
      ></textarea>
      <div className="w-full text-right">
        <button className="rounded-md text-xl lg:ml-0 bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
          Re-Publish Recipe &nbsp; &#8594;
        </button>
      </div>
    </form>
  ) : (
    <h1 className="w-full text-center text-4xl text-green-600 mt-10">
        Loading Recipe...
    </h1>
  );
};

export default Update;
