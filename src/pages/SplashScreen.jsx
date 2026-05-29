import {
  useEffect,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

function SplashScreen() {

  const navigate =
    useNavigate();

  useEffect(() => {

    const timer =
      setTimeout(() => {

        navigate(
          "/login"
        );

      }, 3000);

    return () =>
      clearTimeout(timer);

  }, [navigate]);

  return (

    <div className="splash-screen">

      {/* LOGO */}

      <img
        src="/logo.png"
        className="splash-logo"
      />

      {/* TITLE */}

      <h1 className="splash-title">

        Youri

      </h1>

      <p className="splash-subtitle">

        Smart Cooking Assistant

      </p>

      {/* LOADING */}

      <div className="loading-bar">

        <div className="loading-fill">

        </div>

      </div>

    </div>

  );
}

export default
  SplashScreen;