import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
 
  const navigate = useNavigate();


  const handleClick = () => {
    setTimeout(() => {
      navigate("/recipes")
    }, 200); // 1000 milliseconds = 1 second
  };
  return (
    <div className="w-full h-[80vh] flex flex-col-reverse lg:flex-row justify-between items-center">
      <div className="left w-full lg:w-1/2 ">
        <h1 className="lg:text-7xl  text-3xl ml-[9vh] w-[400px] lg:ml-0 font-extrabold font-[comforter] text-green-600  ">
          It Takes Three 
          To Taco
        </h1>
        <p className="text-zinc-400 text-xs text-center lg:text-start lg:text-lg mt-5 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos
          maiores harum doloribus, praesentium alias qui esse id atque sapiente
          similique quis, velit fugit, nemo unde consectetur voluptatem sequi
          repellat.
        </p>
        <button onClick={handleClick} className="relative inline-block text-lg group cursor-pointer	 ml-[12vh] lg:ml-0 mb-7">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-green-800 transition-colors duration-300 ease-out border border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-green-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Get Started &nbsp; &#8594;</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-green-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </div>
      <img
        className="lg:w-1/2 w-full"
        src="https://png.pngtree.com/png-clipart/20231011/original/pngtree-ratatouille-png-with-ai-generated-png-image_13294686.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
