import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "./Card";
import { recipecontext } from "../contexts/RecipeContext";
import SearchBar from "./SearchBar";
import FilterOptions from "./FilterOptions";

const Recipes = () => {
  const [recipe, setRecipe] = useContext(recipecontext);
  const { pathname } = useLocation();
  const [filteredRecipes, setFilteredRecipes] = useState(recipe);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    setRecipe(JSON.parse(localStorage.getItem("recipe")) || []);
  }, []);

  useEffect(() => {
    filterRecipes();
  }, [recipe, searchQuery, selectedFilters]);

  const filterRecipes = () => {
    let filtered = recipe;

    if (searchQuery) {
      filtered = filtered.filter((r) =>
        r.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedFilters.length > 0) {
      filtered = filtered.filter((r) =>
        selectedFilters.every((filter) => r.tags.includes(filter))
      );
    }

    setFilteredRecipes(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <div className="mb-10">
      <h1 className="text-center text-2xl font-semibold mb-5">OUR RECIPES</h1>
      <p className="text-center mb-20 lg:mb-0 text-zinc-400 lg:text-lg text-sm lg:w-[400px] lg:ml-[25vw] ml-4 w-[300px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam?
      </p>
      <div className="flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex justify-center mt-5">
        <FilterOptions onFilter={handleFilter} />
      </div>
      <div className="recipe-cards mt-[5%]  flex flex-col lg:flex-row flex-wrap p-5">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((r) => <Card key={r.id} recipe={r} />)
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
  );
};

export default Recipes;
