import {
  FaArrowLeft,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

function SavedIngredients() {

  const navigate =
    useNavigate();

  const ingredients = [

    {
      name: "Nasi",
      amount: "2 porsi",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    },

    {
      name: "Telur",
      amount: "5 butir",
      image:
        "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
    },

    {
      name: "Ayam",
      amount: "1 kg",
      image:
        "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
    },

    {
      name: "Bawang Merah",
      amount: "10 buah",
      image:
        "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb",
    },

  ];

  return (

    <div className="home-modern">

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
          Bahan Terselamatkan
        </h2>

      </div>

      {/* TITLE */}

      <h1 className="about-title">

        🥬 Saved Ingredients

      </h1>

      <p
        style={{
          color:"#666",
          marginBottom:"25px",
        }}
      >

        Bahan makanan yang berhasil
        diselamatkan setelah memasak.

      </p>

      {/* GRID */}

      <div className="saved-grid">

        {ingredients.map(
          (item, index) => (

            <div
              className="saved-card"
              key={index}
            >

              <img
                src={item.image}
              />

              <div
                className="saved-content"
              >

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.amount}
                </p>

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );
}

export default SavedIngredients;