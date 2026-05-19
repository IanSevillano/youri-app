import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaSearch,
} from "react-icons/fa";

import { useState } from "react";

function CariResep() {

  const navigate = useNavigate();

  const [ingredient,
    setIngredient] =
    useState("");

  const [selectedCategory,
    setSelectedCategory] =
    useState("ALL");

  const recipes = [

    {
      id:"rcp_001",

      title:"Nasi Goreng",

      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19",

      category:"INDONESIAN",

      ingredients:[
        "NASI",
        "TELUR",
        "KECAP ASIN",
      ],
    },

    {
      id:"rcp_002",

      title:"Ayam Bakar",

      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061",

      category:"DINNER",

      ingredients:[
        "AYAM",
        "BAWANG PUTIH",
        "KECAP ASIN",
      ],
    },

    {
      id:"rcp_003",

      title:"Bakmie Goreng",

      image:
        "https://images.unsplash.com/photo-1612929633738",

      category:"NOODLES",

      ingredients:[
        "MIE",
        "TELUR",
        "KECAP ASIN",
      ],
    },
  ];

  /* FILTER RESEP */

  const filteredRecipes =
    recipes.filter((recipe) => {

      const search =
        ingredient.toLowerCase();

      const matchIngredient =
        recipe.ingredients.some(
          (item) =>
            item
              .toLowerCase()
              .includes(search)
        );

      const matchCategory =
        selectedCategory ===
        "ALL"
          ? true
          : recipe.category ===
            selectedCategory;

      return (
        matchIngredient &&
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
            Cari resep berdasarkan
            bahan makanan yang kamu punya.
          </p>

        </div>

        <img
          src="/chef-search.png"
          className="search-chef"
        />

      </div>

      {/* SEARCH */}

      <div className="search-box">

        <FaSearch />

        <input
          type="text"
          placeholder="contoh : telur, ayam, mie..."
          value={ingredient}
          onChange={(e) =>
            setIngredient(
              e.target.value
            )
          }
        />

      </div>

      {/* CATEGORY */}

      <div className="filter-row">

        <button
          className={
            selectedCategory === "ALL"
              ? "filter-btn active-filter"
              : "filter-btn"
          }
          onClick={() =>
            setSelectedCategory(
              "ALL"
            )
          }
        >
          Semua
        </button>

        <button
          className={
            selectedCategory ===
            "INDONESIAN"
              ? "filter-btn active-filter"
              : "filter-btn"
          }
          onClick={() =>
            setSelectedCategory(
              "INDONESIAN"
            )
          }
        >
          Indonesian
        </button>

        <button
          className={
            selectedCategory ===
            "DINNER"
              ? "filter-btn active-filter"
              : "filter-btn"
          }
          onClick={() =>
            setSelectedCategory(
              "DINNER"
            )
          }
        >
          Dinner
        </button>

        <button
          className={
            selectedCategory ===
            "NOODLES"
              ? "filter-btn active-filter"
              : "filter-btn"
          }
          onClick={() =>
            setSelectedCategory(
              "NOODLES"
            )
          }
        >
          Noodles
        </button>

      </div>

      {/* TITLE */}

      <h3 className="result-title">

        Rekomendasi Resep ✨

      </h3>

      {/* GRID */}

      <div className="recipe-search-grid">

        {filteredRecipes.map(
          (item) => (

            <div
              className="search-card"
              key={item.id}
              onClick={() =>
                navigate(
                  `/recipe/${item.id}`
                )
              }
            >

              <img src={item.image} />

              <div className="search-overlay">

                <div>

                  <h3>
                    {item.title}
                  </h3>

                  {/* INGREDIENTS */}

                  <div className="recipe-ingredient-tags">

                    {item.ingredients.map(
                      (
                        ingredient,
                        index
                      ) => (

                        <span
                          key={index}
                        >
                          {ingredient}
                        </span>

                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );
}

export default CariResep;