import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

function About() {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const sliderRef =
    useRef(null);

  const [
    activeTutorial,
    setActiveTutorial,
  ] = useState(0);

  const [
    showTutorialPopup,
    setShowTutorialPopup,
  ] = useState(false);

  /* TUTORIAL */

  const tutorials = [

    {
      title:
        "Tutorial Memasak",

      description:
        "Pelajari cara mencari resep dan mulai memasak dengan mudah.",

      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061",

      steps: [
        "Buka Cari Resep",
        "Cari makanan favorit",
        "Klik resep",
        "Mulai memasak",
      ],
    },

    {
      title:
        "Tutorial Membuat Resep",

      description:
        "Tambahkan resep buatanmu sendiri ke aplikasi Youri.",

      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554",

      steps: [
        "Masuk My Recipes",
        "Klik Tambah Resep",
        "Isi data resep",
        "Simpan resep",
      ],
    },

    {
      title:
        "Tutorial Bahan",

      description:
        "Lihat bahan tersisa yang berhasil diselamatkan.",

      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",

      steps: [
        "Masak makanan",
        "Sisa bahan tersimpan",
        "Lihat di dashboard",
      ],
    },

    {
      title:
        "Tutorial Progress",

      description:
        "Naikkan level dan streak memasak harian.",

      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",

      steps: [
        "Masak setiap hari",
        "Jaga streak",
        "Kumpulkan EXP",
      ],
    },

  ];

  /* AUTO SLIDER */

  useEffect(() => {

    const slider =
      sliderRef.current;

    if (!slider) return;

    let current = 0;

    const interval =
      setInterval(() => {

        const cards =
          slider.children;

        if (
          !cards.length
        ) return;

        current++;

        if (
          current >=
          cards.length
        ) {

          current = 0;

        }

        cards[current]
          .scrollIntoView({

            behavior:
              "smooth",

            inline:
              "start",

            block:
              "nearest",

          });

      }, 5000);

    return () =>
      clearInterval(
        interval
      );

  }, []);

  return (

    <div className="home-modern">

      {/* TOPBAR */}

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

        <img
          src="https://i.pravatar.cc/100"
          className="profile-img"
        />

      </div>

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
            navigate("/dashboard")
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
        >

          About

        </button>

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

          <h3>
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
            src="https://i.pravatar.cc/200?img=1"
            className="team-image"
          />

          <h3>
            Septian
          </h3>

          <p>
            Frontend Developer
          </p>

        </div>

        <div className="team-card">

          <img
            src="https://i.pravatar.cc/200?img=2"
            className="team-image"
          />

          <h3>
            Rifki
          </h3>

          <p>
            Backend Developer
          </p>

        </div>

        <div className="team-card">

          <img
            src="https://i.pravatar.cc/200?img=3"
            className="team-image"
          />

          <h3>
            Aulia
          </h3>

          <p>
            Data Analyst
          </p>

        </div>

        <div className="team-card">

          <img
            src="https://i.pravatar.cc/200?img=4"
            className="team-image"
          />

          <h3>
            Nanda
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

  );
}

export default About;