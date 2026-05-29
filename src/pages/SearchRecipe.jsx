import {
  useState,
  useContext,
} from "react";

import {
  FaArrowLeft,
  FaSearch,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

import {
  RecipeContext,
} from "../context/RecipeContext";

function SearchRecipe() {

  const navigate =
    useNavigate();

  const {
    recipes,
  } = useContext(
    RecipeContext
  );

  const [search,
    setSearch] =
    useState("");

  const [category,
    setCategory] =
    useState("Semua");

  const categories = [
    "Semua",
    "Indonesian",
    "Dinner",
    "Noodles",
  ];

  const filteredRecipes =
    recipes.filter((item) => {

      const matchSearch =
        item.ingredients
          .join(" ")
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchCategory =
        category === "Semua"

          ? true

          : item.category
              .toLowerCase()
              .includes(
                category.toLowerCase()
              );

      return (
        matchSearch &&
        matchCategory
      );
    });

  return (

    <div className="search-page">

      {/* HEADER */}

      <div className="search-header">

        <button
          className="back-btn"
          onClick={() =>
            navigate("/dashboard")
          }
        >

          <FaArrowLeft />

        </button>

        <h2>
          Cari Resep
        </h2>

      </div>

      {/* HERO */}

      <div className="search-hero">

        <div>

          <h1>
            Mau masak apa hari ini? 🍳
          </h1>

          <p>
            Cari resep berdasarkan bahan makanan yang kamu punya.
          </p>

        </div>

        <img
          src="/sprites/cooking.gif"
          className="search-chef"
        />

      </div>

      {/* SEARCH */}

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="contoh : telur, ayam, mie..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

      </div>

      {/* CATEGORY */}

      <div className="filter-row">

        {categories.map((item, index) => (

          <button
            key={index}
            className={
              category === item

                ? "filter-btn active-filter"

                : "filter-btn"
            }
            onClick={() =>
              setCategory(item)
            }
          >

            {item}

          </button>

        ))}

      </div>

      {/* RESULT */}

      <h3 className="result-title">
        Rekomendasi Resep ✨
      </h3>

      <div className="recipe-search-grid">

        {filteredRecipes.map((item) => (

          <div
            className="search-card"
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

            <div className="search-overlay">

              <h3>
                {item.title}
              </h3>

              <div className="ingredient-chip-row">

                {item.ingredients
                  .slice(0, 3)
                  .map((ingredient, index) => (

                    <span
                      key={index}
                      className="ingredient-chip"
                    >

                      {ingredient}

                    </span>

                  ))}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default SearchRecipe;