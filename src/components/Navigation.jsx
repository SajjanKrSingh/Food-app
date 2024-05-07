import React from "react";
import image1 from "../assets/food.png";
import { Link } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";

const Navigation = () => {
  return (
    <nav className="h-[12vh] w-full flex items-center gap-16 lg:gap-0 lg:justify-between">
      <Link to="/">
        <img className="lg:h-[70px] h-[55px] " src={image1} alt="" />
      </Link>
      <div className="flex gap-5 lg:gap-x-12 text-center text-[12px] lg:text-[18px] ">
        <Link className="hover:text-green-600 duration-200" to='/'>
          Home
        </Link>
        <Link className="hover:text-green-600 duration-200" to='/recipes'>
          Recipes
        </Link>
        <Link className="hover:text-green-600 duration-200" to="/about">
          About
        </Link>
        <Link className="hover:text-green-600 duration-200" to="/contact">
          Contact
        </Link>
      </div>
      <MdRestaurantMenu className="text-3xl text-green-800 hidden lg:flex"  />
    </nav>
  );
};

export default Navigation;
