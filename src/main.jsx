import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RecipeContext from "./contexts/RecipeContext.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Wrapper from "./components/Wrapper.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecipeContext>
    <BrowserRouter>
      <Wrapper>
      <App />
      </Wrapper>
      <ToastContainer/>
    </BrowserRouter>
  </RecipeContext>
);
