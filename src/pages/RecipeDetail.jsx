import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  useContext,
} from "react";

import {
  FaArrowLeft,
  FaClock,
} from "react-icons/fa";

import {
  RecipeContext,
} from "../context/RecipeContext";

function RecipeDetail() {

  const navigate =
    useNavigate();

  const { id } =
    useParams();

  const { recipes } =
    useContext(
      RecipeContext
    );

  /* CARI RESEP BERDASARKAN ID */

  const recipe =
    recipes.find(
      (item) =>
        item.id === id
    );

  /* JIKA TIDAK ADA */

  if (!recipe) {

    return (

      <div
        className=" recipe-detail-page"
      >

        <h2>
          Recipe tidak ditemukan
        </h2>

      </div>

    );
  }

  return (

    <div className="recipe-detail-page">

      {/* HEADER */}

      <div className="recipe-detail-header">

        <button
          className="back-btn"
          onClick={() =>
            navigate(-1)
          }
        >

          <FaArrowLeft />

        </button>

      </div>

      {/* IMAGE */}

      <img
        src={recipe.image}
        className="detail-banner"
      />

      {/* CONTENT */}

      <div className="detail-content">

        <h1>
          {recipe.title}
        </h1>

        <h3
          style={{
            color:"#ff7a00",
            marginBottom:"20px",
          }}
        >
          {recipe.category}
        </h3>

        {/* DURATION */}

        <div className="detail-duration">

          <FaClock />

          <span>

            {recipe.duration.hours}
            {" "}jam{" "}

            {recipe.duration.minutes}
            {" "}menit

          </span>

        </div>

        {/* INGREDIENTS */}

        <h2>
          Ingredients
        </h2>

        <ul>

          {recipe.ingredients.map(
            (item, index) => (

              <li key={index}>
                {item}
              </li>

            )
          )}

        </ul>

        {/* INSTRUCTIONS */}

        <h2>
          Instructions
        </h2>

        <ol>

          {recipe.instructions.map(
            (step, index) => (

              <li key={index}>
                {step}
              </li>

            )
          )}

        </ol>

      </div>

    </div>

  );
}

export default RecipeDetail;