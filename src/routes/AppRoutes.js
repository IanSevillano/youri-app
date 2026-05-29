import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import SearchRecipe from "../pages/SearchRecipe";
import RecipeDetail from "../pages/RecipeDetail";
import AddRecipe from "../pages/AddRecipe";
import MyRecipes from "../pages/MyRecipes";
import Profile from "../pages/Profile";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
         <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/search"
          element={<SearchRecipe />}
        />

        <Route
          path="/recipe/:id"
          element={<RecipeDetail />}
        />

        <Route
          path="/add-recipe"
          element={<AddRecipe />}
        />

        <Route
          path="/my-recipes"
          element={<MyRecipes />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;