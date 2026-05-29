import {
  useState,
  useContext,
} from "react";

import {
  FaArrowLeft,
  FaSearch,
  FaPlus,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

import {
  RecipeContext,
} from "../context/RecipeContext";

function MyRecipes() {

  const navigate =
    useNavigate();

  /* CONTEXT */

  const {
    recipes,
  } = useContext(
    RecipeContext
  );

  /* SEARCH */

  const [search,
    setSearch] =
    useState("");

  /* FILTER */

  const filteredRecipes =
    recipes.filter((item) =>

      item.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (

    <div className="my-recipes-page">

      {/* HEADER */}

      <div className="recipe-header">

        <button
          className="back-btn"
          onClick={() =>
            navigate("/dashboard")
          }
        >

          <FaArrowLeft />

        </button>

        <h2>
          My Recipes
        </h2>

      </div>

      {/* SEARCH */}

      <div className="recipe-search">

        <FaSearch />

        <input
          type="text"
          placeholder="Cari resep..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

      </div>

      {/* BUTTON */}

      <button
        className="add-recipe-btn"
        onClick={() =>
          navigate("/add-recipe")
        }
      >

        <FaPlus />

        Tambah Resep

      </button>

      {/* EMPTY */}

      {filteredRecipes.length
        === 0 && (

        <div
          style={{

            textAlign:
              "center",

            marginTop:
              "50px",

            color:"#999",

          }}
        >

          Belum ada resep

        </div>

      )}

      {/* GRID */}

      <div className="recipe-grid">

        {filteredRecipes.map(
          (item) => (

            <div
              className="
                recipe-card-modern
              "
              key={item.id}
              onClick={() =>
                navigate(
                  `/recipe/${item.id}`
                )
              }
            >

              <img
                src={item.image}
              />

              <div className="recipe-overlay">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.category}
                </p>

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );
}

export default
  MyRecipes;