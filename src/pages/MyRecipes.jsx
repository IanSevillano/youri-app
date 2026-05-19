import { useState } from "react";

import {
  FaArrowLeft,
  FaSearch,
  FaPlus,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

function MyRecipes() {

  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  /* TYPE DATA */

  const [recipes] = useState([
    {
      id: "rcp_001",

      title: "Nasi Goreng",

      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19",

      category: "MAIN_COURSE",

      ingredients: [
        "RICE",
        "EGG",
        "SOY_SAUCE",
      ],

      instructions: [
        "Panaskan minyak",
        "Masukkan telur",
        "Masukkan nasi",
      ],

      duration: {
        hours: 0,
        minutes: 20,
      },
    },

    {
      id: "rcp_002",

      title: "Ayam Bakar",

      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061",

      category: "DINNER",

      ingredients: [
        "CHICKEN",
        "ONION",
        "SOY_SAUCE",
      ],

      instructions: [
        "Marinasi ayam",
        "Bakar ayam",
        "Sajikan hangat",
      ],

      duration: {
        hours: 1,
        minutes: 0,
      },
    },
  ]);

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

      {/* GRID */}

      <div className="recipe-grid">

        {filteredRecipes.map(
          (item) => (

            <div
              className="recipe-card-modern"
              key={item.id}
              onClick={() =>
                navigate(
                  `/recipe/${item.id}`,
                  {
                    state: item,
                  }
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

export default MyRecipes;