import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import {
  BrowserRouter,
} from "react-router-dom";

import RecipeProvider from
"./context/RecipeContext";

ReactDOM.createRoot(
  document.getElementById(
    "root"
  )
).render(

  <React.StrictMode>

    <BrowserRouter>

      <RecipeProvider>

        <App />

      </RecipeProvider>

    </BrowserRouter>

  </React.StrictMode>

);