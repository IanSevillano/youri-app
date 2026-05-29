import {
  Routes,
  Route,
} from "react-router-dom";

/* SPLASH */

import SplashScreen
from "./pages/SplashScreen";

/* AUTH */

import Login
from "./pages/Login";

/* MAIN */

import Dashboard
from "./pages/Dashboard";

import About
from "./pages/About";

/* RECIPE */

import SearchRecipe
from "./pages/SearchRecipe";

import RecipeDetail
from "./pages/RecipeDetail";

import MyRecipes
from "./pages/MyRecipes";

import AddRecipe
from "./pages/AddRecipe";

/* EXTRA */

import SavedIngredients
from "./pages/SavedIngredients";

import Profile
from "./pages/Profile";

function App() {

  return (

    <Routes>

      {/* SPLASH */}

      <Route
        path="/"
        element={
          <SplashScreen />
        }
      />

      {/* LOGIN */}

      <Route
        path="/login"
        element={<Login />}
      />

      {/* DASHBOARD */}

      <Route
        path="/dashboard"
        element={
          <Dashboard />
        }
      />

      {/* ABOUT */}

      <Route
        path="/about"
        element={<About />}
      />

      {/* SEARCH RECIPE */}

      <Route
        path="/search-recipe"
        element={
          <SearchRecipe />
        }
      />

      {/* DETAIL RECIPE */}

      <Route
        path="/recipe/:id"
        element={
          <RecipeDetail />
        }
      />

      {/* MY RECIPES */}

      <Route
        path="/my-recipes"
        element={
          <MyRecipes />
        }
      />

      {/* ADD RECIPE */}

      <Route
        path="/add-recipe"
        element={
          <AddRecipe />
        }
      />

      {/* SAVED INGREDIENTS */}

      <Route
        path="/saved-ingredients"
        element={
          <SavedIngredients />
        }
      />

      {/* PROFILE */}

      <Route
        path="/profile"
        element={
          <Profile />
        }
      />

    </Routes>

  );
}

export default App;