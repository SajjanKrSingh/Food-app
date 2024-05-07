import React from "react";
import Navigation from "./components/Navigation";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Recipes from "./components/Recipes";
import Details from "./components/Details";
import Create from "./components/Create";
import About from "./components/About";
import Contact from "./components/Contact";
import Update from "./components/Update";

const App = () => {
    return (
        <div className="lg:w-[80%] w-full overflow-x-hidden lg:m-auto px-5  ">
            <Navigation />

            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/create-recipe" element={<Create />} />
                <Route path="/update-recipe" element={<Update />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/1" element={<Details />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;