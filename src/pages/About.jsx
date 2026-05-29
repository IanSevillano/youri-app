import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FaArrowLeft,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

function About() {

  const navigate =
    useNavigate();

  const [
    showTutorialPopup,
    setShowTutorialPopup,
  ] = useState(false);

  const [
    activeTutorial,
    setActiveTutorial,
  ] = useState(0);

  const sliderRef =
    useRef(null);

  /* DATA TUTORIAL */

  const tutorials = [

    {
      title:
        "Tutorial Memasak",

      description:
        "Pelajari cara mencari resep dan mulai memasak dengan mudah.",

      image:
        "/tutorial-cook.png",

      steps: [
        "Buka halaman Cari Resep",
        "Cari makanan favorit",
        "Klik resep yang ingin dimasak",
        "Ikuti langkah memasak",
      ],
    },

    {
      title:
        "Tutorial Membuat Resep",

      description:
        "Tambahkan resep buatanmu sendiri ke aplikasi Youri.",

      image:
        "/tutorial-add.png",

      steps: [
        "Masuk ke halaman My Recipes",
        "Klik tombol Tambah Resep",
        "Isi detail resep",
        "Simpan resep",
      ],
    },

    {
      title:
        "Tutorial Bahan Tersisa",

      description:
        "Lihat bahan makanan yang berhasil diselamatkan setelah memasak.",

      image:
        "/tutorial-ingredient.png",

      steps: [
        "Selesaikan aktivitas memasak",
        "Sisa bahan otomatis tersimpan",
        "Buka halaman bahan terselamatkan",
      ],
    },

    {
      title:
        "Tutorial Progress",

      description:
        "Naikkan streak memasak dan level akun setiap hari.",

      image:
        "/tutorial-progress.png",

      steps: [
        "Masak setiap hari",
        "Pertahankan streak",
        "Kumpulkan EXP",
        "Naik level akun",
      ],
    },

  ];

  /* AUTO SLIDE TEAM */

  useEffect(() => {

    const slider =
      sliderRef.current;

    if (!slider) return;

    let current = 0;

    const cardWidth = 186;

    const autoSlide =
      setInterval(() => {

        current++;

        if (
          current >= 4
        ) {

          current = 0;

        }

        slider.scrollTo({

          left:
            current *
            cardWidth,

          behavior:
            "smooth",

        });

      }, 4000);

    return () =>
      clearInterval(
        autoSlide
      );

  }, []);

  return (

    <div className="home-modern">

      <div className="about-container">

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
            About
          </h2>

        </div>

        {/* TITLE */}

        <h1 className="about-title">
          About Youri
        </h1>

        {/* DESCRIPTION */}

        <p className="about-description">

          Youri adalah aplikasi
          cooking assistant modern
          yang membantu pengguna
          mengelola bahan makanan,
          menemukan inspirasi resep,
          melacak progress memasak,
          dan meningkatkan
          konsistensi aktivitas
          memasak setiap hari.

          <br /><br />

          Dengan tampilan yang
          sederhana namun interaktif,
          Youri hadir untuk membantu
          pengalaman memasak menjadi
          lebih praktis,
          menyenangkan,
          dan terorganisir.

        </p>

        {/* HOW TO USE */}

        <h1 className="about-title">
          How to Use
        </h1>

        <div className="how-box">

          <div>

            <h3
              style={{
                marginBottom:"10px",
              }}
            >

              {
                tutorials[
                  activeTutorial
                ].title
              }

            </h3>

            <p>

              {
                tutorials[
                  activeTutorial
                ].description
              }

            </p>

            <button
              className="tutorial-btn"
              onClick={() =>
                setShowTutorialPopup(
                  true
                )
              }
            >

              Open Tutorial

            </button>

            {/* DOTS */}

            <div className="dots">

              {tutorials.map(
                (_, index) => (

                  <span
                    key={index}
                    onClick={() =>
                      setActiveTutorial(
                        index
                      )
                    }
                    className={
                      activeTutorial ===
                      index
                        ? "active-dot"
                        : ""
                    }
                  ></span>

                )
              )}

            </div>

          </div>

          <img
            src={
              tutorials[
                activeTutorial
              ].image
            }
            className="tutorial-image"
          />

        </div>

        {/* TEAM */}

        <h1 className="about-title">
          Our Team
        </h1>

        <div
          className="team-slider"
          ref={sliderRef}
        >

          <div className="team-card">

            <img
              src="/team1.png"
              className="team-image"
            />

            <h3>
              Ian
            </h3>

            <p>
              Frontend Developer
            </p>

          </div>

          <div className="team-card">

            <img
              src="/team2.png"
              className="team-image"
            />

            <h3>
              Azmi
            </h3>

            <p>
              Backend Developer
            </p>

          </div>

          <div className="team-card">

            <img
              src="/team3.png"
              className="team-image"
            />

            <h3>
              Aidan
            </h3>

            <p>
              Data Analyst
            </p>

          </div>

          <div className="team-card">

            <img
              src="/team4.png"
              className="team-image"
            />

            <h3>
              Ricky
            </h3>

            <p>
              AI Machine Learning
            </p>

          </div>

        </div>

        {/* POPUP */}

        {showTutorialPopup && (

          <div className="popup-overlay">

            <div className="tutorial-modal">

              <h1>
                {
                  tutorials[
                    activeTutorial
                  ].title
                }
              </h1>

              <div className="tutorial-list">

                {
                  tutorials[
                    activeTutorial
                  ].steps.map(
                    (
                      item,
                      index
                    ) => (

                      <div
                        className="tutorial-item"
                        key={index}
                      >

                        <span>
                          {index + 1}
                        </span>

                        <p>
                          {item}
                        </p>

                      </div>

                    )
                  )
                }

              </div>

              <button
                className="close-tutorial-btn"
                onClick={() =>
                  setShowTutorialPopup(
                    false
                  )
                }
              >

                Mengerti

              </button>

            </div>

          </div>

        )}

      </div>

    </div>

  );
}

export default About;