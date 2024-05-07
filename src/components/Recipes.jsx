import React from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "./Card";
const Recipes = () => {
    
    const { pathname } = useLocation();
    return (
        <div className="mb-10">
            <h1 className="text-center text-2xl font-semibold mb-5">OUR RECIPES</h1>
            <p className="text-center mb-20 lg:mb-0 text-zinc-400 lg:text-lg text-sm lg:w-[400px] lg:ml-[25vw] ml-4 w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                aperiam?
            </p>
            <div className="recipe-cards mt-[5%]  flex flex-col lg:flex-row flex-wrap p-5">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
            {pathname === "/recipes" && (
                <Link
                    to="/create-recipe"
                    className="cursor-pointer rounded-md absolute lg:top-[15%] top-[30%] py-2 px-5 lg:left-[18.5%] left-[50%] -translate-x-[50%]  bg-green-200 gap-x-3 flex items-center"
                >
                    <i className="lg:text-3xl text-green-600 ri-add-box-line"></i> <h1 className="capitalize text-xs lg:text-lg">create recipes</h1>
                </Link>
            )}
        </div>
    );
};

export default Recipes;


