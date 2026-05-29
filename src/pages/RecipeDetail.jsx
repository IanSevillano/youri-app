import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  useContext,
  useState,
  useEffect,
} from "react";

import {
  FaArrowLeft,
  FaClock,
  FaCheckCircle,
  FaPlay,
} from "react-icons/fa";

import {
  RecipeContext,
} from "../context/RecipeContext";

function RecipeDetail() {

  const navigate =
    useNavigate();

  const { id } =
    useParams();

  const {

    recipes,
    gainExp,

  } = useContext(
    RecipeContext
  );

  const recipe =
    recipes.find(
      (item) =>
        item.id === id
    );

  /* STEP */

  const [currentStep,
    setCurrentStep] =
    useState(0);

  /* COOK STATE */

  const [isCooking,
    setIsCooking] =
    useState(false);

  const [completed,
    setCompleted] =
    useState(false);

  /* TIMER */

  const totalSeconds =

    (
      recipe?.duration
        ?.hours || 0
    ) * 3600 +

    (
      recipe?.duration
        ?.minutes || 0
    ) * 60;

  const [seconds,
    setSeconds] =
    useState(
      totalSeconds
    );

  /* TIMER EFFECT */

  useEffect(() => {

    let timer;

    if (
      isCooking &&
      seconds > 0 &&
      !completed
    ) {

      timer =
        setInterval(() => {

          setSeconds(
            (prev) =>
              prev - 1
          );

        }, 1000);
    }

    return () =>
      clearInterval(timer);

  }, [

    isCooking,
    seconds,
    completed,

  ]);

  /* FORMAT TIMER */

  const hours =
    Math.floor(
      seconds / 3600
    );

  const minutes =
    Math.floor(
      (seconds % 3600) / 60
    );

  const remainingSeconds =
    seconds % 60;

  /* START COOK */

  const handleStartCook =
    () => {

      setIsCooking(true);
    };

  /* NEXT STEP */

  const handleNextStep =
    () => {

      if (
        currentStep <
        recipe.instructions
          .length - 1
      ) {

        setCurrentStep(
          currentStep + 1
        );

      } else {

        handleFinishCook();
      }
    };

  /* FINISH */

  const handleFinishCook =
    () => {

      setCompleted(true);

      setIsCooking(false);

      gainExp(30);
    };

  /* NOT FOUND */

  if (!recipe) {

    return (

      <div
        className="
          recipe-detail-page
        "
      >

        <h2>
          Recipe tidak ditemukan
        </h2>

      </div>

    );
  }

  return (

    <div
      className="
        recipe-detail-page
      "
    >

      {/* HEADER */}

      <div
        className="
          recipe-detail-header
        "
      >

        <button
          className="
            back-btn
          "
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
        className="
          detail-banner
        "
      />

      {/* CONTENT */}

      <div
        className="
          detail-content
        "
      >

        {/* TITLE */}

        <h1>
          {recipe.title}
        </h1>

        <p
          className="
            detail-category-text
          "
        >

          {recipe.category}

        </p>

        {/* TIMER */}

        <div
          className="
            detail-duration
          "
        >

          <FaClock />

          <span>

            {hours}
            {" "}jam{" "}

            {minutes}
            {" "}menit{" "}

            {remainingSeconds}
            {" "}detik

          </span>

        </div>

        {/* SPRITE */}

        <div
          className="
            cooking-assistant
          "
        >

          <img
            src="
              /sprites/cooking.gif
            "
            className="
              cooking-sprite
            "
          />

          <div
            className="
              assistant-chat
            "
          >

            {!isCooking &&
              !completed &&

              "Klik mulai memasak 🍳"
            }

            {isCooking &&
              !completed &&

              "Timer berjalan ⏱"
            }

            {completed &&

              "Masakan selesai 🎉"
            }

          </div>

        </div>

        {/* PROGRESS */}

        <div
          className="
            cook-progress
          "
        >

          <div
            className="
              progress-bar
            "
          >

            <div
              className="
                progress-fill
              "
              style={{

                width:
                  `${(
                    (
                      currentStep + 1
                    ) /

                    recipe
                      .instructions
                      .length
                  ) * 100}%`

              }}
            ></div>

          </div>

          <p>

            Step{" "}
            {currentStep + 1}
            {" / "}
            {
              recipe.instructions
                .length
            }

          </p>

        </div>

        {/* INGREDIENTS */}

        <div
          className="
            detail-section
          "
        >

          <h3>
            Ingredients
          </h3>

          <div
            className="
              ingredient-chip-row
            "
          >

            {recipe.ingredients.map(
              (
                item,
                index
              ) => (

                <span
                  key={index}
                  className="
                    ingredient-chip
                  "
                >

                  {item}

                </span>

              )
            )}

          </div>

        </div>

        {/* STEP CARD */}

        <div
          className="
            current-step-card
          "
        >

          <h3>
            Langkah Sekarang
          </h3>

          <p>

            {
              recipe.instructions[
                currentStep
              ]
            }

          </p>

        </div>

        {/* ALL STEP */}

        <div
          className="
            detail-section
          "
        >

          <h3>
            Semua Langkah
          </h3>

          <ol>

            {recipe.instructions.map(
              (
                step,
                index
              ) => (

                <li
                  key={index}
                  className={

                    currentStep ===
                    index

                      ? "active-step"

                      : ""
                  }
                >

                  {step}

                </li>

              )
            )}

          </ol>

        </div>

        {/* START BUTTON */}

        {!isCooking &&
          !completed && (

          <button
            className="
              start-cook-btn
            "
            onClick={
              handleStartCook
            }
          >

            <FaPlay />

            Mulai Memasak

          </button>

        )}

        {/* NEXT BUTTON */}

        {isCooking &&
          !completed && (

          <button
            className="
              next-step-btn
            "
            onClick={
              handleNextStep
            }
          >

            {

              currentStep ===
              recipe.instructions
                .length - 1

                ? "Selesai Memasak"

                : "Next Step →"

            }

          </button>

        )}

        {/* SUCCESS */}

        {completed && (

          <div
            className="
              cook-success-card
            "
          >

            <img
              src="
                /sprites/happy.gif
              "
              className="
                success-sprite
              "
            />

            <h2>
              Great Job Chef 🎉
            </h2>

            <p>
              +30 EXP didapatkan
            </p>

            <p>
              Bahan tersisa berhasil disimpan
            </p>

            <button
              className="
                back-dashboard-btn
              "
              onClick={() =>
                navigate(
                  "/dashboard"
                )
              }
            >

              Kembali Dashboard

            </button>

          </div>

        )}

      </div>

    </div>

  );
}

export default RecipeDetail;