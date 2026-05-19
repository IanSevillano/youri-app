import { useState } from "react";

import {
  FaArrowLeft,
  FaSave,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

import Popup from "../components/Popup";

import {
  useContext,
} from "react";

import {
  RecipeContext,
} from "../context/RecipeContext";

function AddRecipe() {

  const navigate = useNavigate();

  const {
  recipes,
  setRecipes,
} = useContext(
  RecipeContext
);

  /* POPUP */

  const [popup, setPopup] =
    useState(null);

  /* SEARCH */

  const [ingredientSearch,
    setIngredientSearch] =
    useState("");

  const ingredientsData = [

    "NASI",
    "TELUR",
    "AYAM",
    "BAWANG MERAH",
    "KECAP ASIN",
    "BAWANG PUTIH",
    "SAPI",
    "CABAI",
    "MIE",
    "TOMAT",

  ];

  const [recipeData,
    setRecipeData] =
    useState({

      title: "",

      image: "",

      category: "",

      ingredients: [],

      instructions: [""],

      duration: {
        hours: 0,
        minutes: 0,
      },

    });

  /* STEP */

  const handleInstructionChange = (
    index,
    value
  ) => {

    const updated = [
      ...recipeData.instructions,
    ];

    updated[index] = value;

    setRecipeData({
      ...recipeData,
      instructions: updated,
    });

  };

  const addInstruction = () => {

    setRecipeData({
      ...recipeData,
      instructions: [
        ...recipeData.instructions,
        "",
      ],
    });

  };

  /* SAVE */

  const handleSaveRecipe = () => {

  if (
    !recipeData.title ||
    !recipeData.category ||
    recipeData.ingredients.length === 0 ||
    recipeData.instructions[0] === ""
  ) {

    setPopup({

      type: "failed",

      title: "Failed!",

      message:
        "Lengkapi data resep terlebih dahulu.",

    });

    return;
  }

  const newRecipe = {

    id:
      "rcp_" +
      Date.now(),

    ...recipeData,

  };

  setRecipes([
    ...recipes,
    newRecipe,
  ]);

  setPopup({

    type: "success",

    title: "Success!",

    message:
      "Recipe berhasil disimpan.",

  });

};

  /* CLOSE POPUP */

  const handleClosePopup = () => {

    if (
      popup.type === "success"
    ) {

      navigate("/my-recipes");

    }

    setPopup(null);

  };

  return (

    <div className="add-recipe-page">

      {/* HEADER */}

      <div className="recipe-header">

        <button
          className="back-btn"
          onClick={() =>
            navigate("/my-recipes")
          }
        >

          <FaArrowLeft />

        </button>

        <h2>
          Add Recipe
        </h2>

      </div>

      {/* FORM */}

      <div className="recipe-form-modern">

        {/* TITLE */}

        <input
          type="text"
          placeholder="Nama resep"
          value={recipeData.title}
          onChange={(e) =>
            setRecipeData({
              ...recipeData,
              title:
                e.target.value,
            })
          }
        />

        {/* IMAGE */}

        <input
          type="text"
          placeholder="Cloudinary Signed URI"
          value={recipeData.image}
          onChange={(e) =>
            setRecipeData({
              ...recipeData,
              image:
                e.target.value,
            })
          }
        />

        {/* CATEGORY */}

        <select
          value={recipeData.category}
          onChange={(e) =>
            setRecipeData({
              ...recipeData,
              category:
                e.target.value,
            })
          }
        >

          <option value="">
            Pilih kategori
          </option>

          <option value="BREAKFAST">
            Breakfast
          </option>

          <option value="LUNCH">
            Lunch
          </option>

          <option value="DINNER">
            Dinner
          </option>

          <option value="DESSERT">
            Dessert
          </option>

          <option value="MAIN_COURSE">
            Main Course
          </option>

        </select>

        {/* INGREDIENT SEARCH */}

        <div className="ingredient-wrapper">

          <input
            type="text"
            placeholder="Cari bahan..."
            className="ingredient-search"
            onChange={(e) =>
              setIngredientSearch(
                e.target.value
              )
            }
          />

          <div className="ingredient-list">

            {ingredientsData

              .filter((item) =>
                item
                  .toLowerCase()
                  .includes(
                    ingredientSearch
                      .toLowerCase()
                  )
              )

              .map((item) => (

                <button
                  type="button"
                  key={item}
                  className={`ingredient-item ${
                    recipeData.ingredients.includes(
                      item
                    )
                      ? "active-ingredient"
                      : ""
                  }`}
                  onClick={() => {

                    if (
                      recipeData.ingredients.includes(
                        item
                      )
                    ) {

                      setRecipeData({
                        ...recipeData,
                        ingredients:
                          recipeData.ingredients.filter(
                            (ing) =>
                              ing !== item
                          ),
                      });

                    } else {

                      setRecipeData({
                        ...recipeData,
                        ingredients: [
                          ...recipeData.ingredients,
                          item,
                        ],
                      });

                    }

                  }}
                >

                  {item}

                </button>

              ))}

          </div>

        </div>

        {/* INSTRUCTION */}

        <div className="instruction-wrapper">

          <h3>
            Langkah Memasak
          </h3>

          {recipeData.instructions.map(
            (item, index) => (

              <textarea
                key={index}
                placeholder={`Langkah ${index + 1}`}
                value={item}
                onChange={(e) =>
                  handleInstructionChange(
                    index,
                    e.target.value
                  )
                }
              />

            )
          )}

          <button
            className="add-step-btn"
            onClick={addInstruction}
          >
            + Tambah Langkah
          </button>

        </div>

        {/* DURATION */}

        <div className="duration-wrapper">

          <label>
            Waktu Memasak
          </label>

          <div className="duration-row">

            <div className="duration-box">

              <span>
                Jam
              </span>

              <input
                type="number"
                value={
                  recipeData.duration.hours
                }
                onChange={(e) =>
                  setRecipeData({
                    ...recipeData,
                    duration: {
                      ...recipeData.duration,
                      hours:
                        Number(
                          e.target.value
                        ),
                    },
                  })
                }
              />

            </div>

            <div className="duration-box">

              <span>
                Menit
              </span>

              <input
                type="number"
                value={
                  recipeData.duration
                    .minutes
                }
                onChange={(e) =>
                  setRecipeData({
                    ...recipeData,
                    duration: {
                      ...recipeData.duration,
                      minutes:
                        Number(
                          e.target.value
                        ),
                    },
                  })
                }
              />

            </div>

          </div>

        </div>

        {/* SAVE */}

        <button
          className="save-recipe-btn"
          onClick={handleSaveRecipe}
        >

          <FaSave />

          Save Recipe

        </button>

      </div>

      {/* POPUP */}

      {popup && (

        <Popup
          type={popup.type}
          title={popup.title}
          message={popup.message}
          onClose={handleClosePopup}
        />

      )}

    </div>

  );
}

export default AddRecipe;