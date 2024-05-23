import React, { useContext, useState } from "react";
import { recipecontext } from "../contexts/RecipeContext";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../store/Reducers/RecipeReducer";

const Create = () => {
  // const [recipe, setrecipe] = useContext(recipecontext);
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [discription, setdiscription] = useState("");
  const [ingredient, setingredient] = useState("");
  const [instruction, setinstruction] = useState("");
  const nevigate=useNavigate();
  const dispatch=useDispatch();

  const submithandler = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: nanoid(),
      image,
      title,
      discription,
      ingredient,
      instruction,
    };
    dispatch(addRecipe(newRecipe));
    // setrecipe([...recipe, newRecipe]);
    // console.log(newRecipe);
    // localStorage.setItem("recipe", JSON.stringify([...recipe, newRecipe]));
    toast.success("Recipe Created!");
    nevigate("/recipes");
  };

  return (
    <form onSubmit={submithandler} className="w-[70%] m-auto  pb-5">
      <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
        Create <br /> New Recipe
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
      <div className="w-full">
        <button className="rounded-md text-xl ml-4 lg:ml-0 bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
          Publish Recipe &nbsp; &#8594;
        </button>
      </div>
    </form>
  );
};

export default Create;
