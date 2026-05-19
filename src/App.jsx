import {
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import SearchRecipe from "./pages/SearchRecipe";
import RecipeDetail from "./pages/RecipeDetail";
import MyRecipes from "./pages/MyRecipes";
import AddRecipe from "./pages/AddRecipe";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Login />}
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
        path="/search-recipe"
        element={<SearchRecipe />}
      />

      <Route
        path="/recipe/:id"
        element={<RecipeDetail />}
      />

      <Route
        path="/my-recipes"
        element={<MyRecipes />}
      />

      <Route
        path="/add-recipe"
        element={<AddRecipe />}
      />

    </Routes>

  );
}

export default App;