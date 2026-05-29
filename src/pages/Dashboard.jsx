import {
  FaFire,
} from "react-icons/fa";

import {
  useState,
  useEffect,
} from "react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

function Dashboard() {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  /* DARK MODE */

  const [darkMode] =
    useState(false);

  /* PROFILE */

  const [
    showProfileMenu,
    setShowProfileMenu,
  ] = useState(false);

  const [
    showLogoutPopup,
    setShowLogoutPopup,
  ] = useState(false);

  /* API DATA */

  const [
    recipes,
    setRecipes,
  ] = useState([]);

  const [
    dashboardData,
    setDashboardData,
  ] = useState(null);

  /* SPRITE */

  const [
    currentSprite,
  ] = useState(
    "/sprites/cooking.gif"
  );

  /* STREAK */

  const streakDays = [
    "Sen",
    "Sel",
    "Rab",
    "Kam",
    "Jum",
    "Sab",
    "Min",
  ];

  /* FETCH DASHBOARD */

  const fetchDashboard =
    async () => {

      try {

        const response = {

          data: {

            gamification_info: {

              level: 7,

              title:
                "Chef Amateur",

              remaining_exp: 30,

            },

            saved_ingredients: [

              "Nasi",

              "Telur",

              "Ayam",

              "Bawang Merah",

            ],

          },

        };

        setDashboardData(
          response.data
        );

      } catch (error) {

        console.log(error);

      }
    };

  /* FETCH RECIPES */

  const fetchRecipes =
    async () => {

      try {

        const response = {

          data: [

            {

              recipe_id:
                "rcp_001",

              title:
                "Nasi Goreng",

              image_url:
                "https://images.unsplash.com/photo-1512058564366-18510be2db19",

            },

            {

              recipe_id:
                "rcp_002",

              title:
                "Ayam Bakar",

              image_url:
                "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",

            },

            {

              recipe_id:
                "rcp_003",

              title:
                "Bakmie Goreng",

              image_url:
                "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",

            },

          ],

        };

        setRecipes(
          response.data
        );

      } catch (error) {

        console.log(error);

      }
    };

  /* LOAD */

  useEffect(() => {

    fetchDashboard();

    fetchRecipes();

  }, []);

  return (

    <div
      className={
        darkMode

          ? "home-modern dark-mode"

          : "home-modern"
      }
    >

      {/* NAVBAR */}

      <div className="topbar">

        <div className="top-left">

          <img
            src="/mascot.png"
            className="small-mascot"
          />

          <h2>
            Youri
          </h2>

        </div>

        <div className="top-right">

          <img
        src="/profile.png"
        className="profile-img"
        onClick={() =>
          setShowProfileMenu(
        !showProfileMenu
        )
        }
          />

        </div>

      </div>

      {/* PROFILE MENU */}

      {showProfileMenu && (

        <div className="profile-popup">

          <button
            onClick={() =>
              navigate("/profile")
            }
          >

            Edit Profile

          </button>

          <button
            onClick={() => {

              setShowProfileMenu(
                false
              );

              setShowLogoutPopup(
                true
              );

            }}
          >

            Logout

          </button>

        </div>

      )}

      {/* LOGOUT */}

      {showLogoutPopup && (

        <div className="popup-overlay">

          <div className="logout-modal">

            <h1>
              Konfirmasi
            </h1>

            <p>
              yakin mau logout?
            </p>

            <div className="logout-actions">

              <button
                className="cancel-btn"
                onClick={() =>
                  setShowLogoutPopup(
                    false
                  )
                }
              >

                Batal

              </button>

              <button
                className="logout-btn"
                onClick={() =>
                  navigate("/")
                }
              >

                Logout

              </button>

            </div>

          </div>

        </div>

      )}

      {/* TABS */}

      <div className="modern-tabs">

        <button
          className={
            location.pathname ===
            "/dashboard"

              ? "modern-tab active-modern"

              : "modern-tab"
          }
          onClick={() =>
            navigate(
              "/dashboard"
            )
          }
        >

          Dashboard

        </button>

        <button
          className={
            location.pathname ===
            "/about"

              ? "modern-tab active-modern"

              : "modern-tab"
          }
          onClick={() =>
            navigate("/about")
          }
        >

          About

        </button>

      </div>

      {/* LEVEL */}

      <div className="orange-card">

        <div>

          <h3>

            Level {

              dashboardData
                ?.gamification_info
                ?.level

            }

            {" - "}

            {

              dashboardData
                ?.gamification_info
                ?.title

            }

            ✨

          </h3>

          <div className="modern-exp">

            <div className="modern-fill"></div>

          </div>

          <p>

            {

              dashboardData
                ?.gamification_info
                ?.remaining_exp

            }

            {" "}Exp menuju level berikutnya

          </p>

        </div>

        {/* SPRITE */}

        <div className="mini-mascot">

          <img
            src={currentSprite}
            className="dashboard-sprite"
          />

        </div>

      </div>

      {/* STREAK */}

      <h3 className="modern-section">

        🔥 Streak masak kamu

      </h3>

      <div className="modern-streak">

        {streakDays.map(
          (day, index) => (

            <div key={index}>

              <div
                className={
                  index < 4

                    ? "fire-box active-fire"

                    : "fire-box"
                }
              >

                <FaFire />

              </div>

              <p>
                {day}
              </p>

            </div>

          )
        )}

      </div>

      {/* SAVED INGREDIENT */}

      <div
        className="ingredient-box"
        onClick={() =>
          navigate(
            "/saved-ingredients"
          )
        }
      >

        <div>

          <h4>
            🥬 Bahan Terselamatkan
          </h4>

          <p>

            {
              dashboardData
                ?.saved_ingredients
                ?.join(", ")
            }

          </p>

        </div>

        <span>
          Lihat →
        </span>

      </div>

      {/* MY RECIPES */}

      <div
        className="recipe-save"
        onClick={() =>
          navigate(
            "/my-recipes"
          )
        }
      >

        📖 Cek Resep yang udah kamu buat

      </div>

      {/* FLOATING BUTTON */}

      <button
        className="floating-cook-btn"
        onClick={() =>
          navigate(
            "/search-recipe"
          )
        }
      >

        🍳

      </button>

      {/* REKOMENDASI */}

      <h3 className="modern-section">

        Bingung mau masak apa?
        Rekomendasi nih! 🍜

      </h3>

      <div className="modern-grid">

        {recipes.map(
          (item, index) => (

            <div
              className="modern-recipe"
              key={index}
            >

              <img
                src={
                  item.image_url
                }
              />

              <div className="recipe-overlay">

                <h3>
                  {item.title}
                </h3>

                <button
                  onClick={() =>
                    navigate(
                      `/recipe/${item.recipe_id}`
                    )
                  }
                >

                  More ›

                </button>

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );
}

export default Dashboard;