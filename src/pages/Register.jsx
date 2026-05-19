import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Popup from "../components/Popup";

function Register() {

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] =
    useState("");

  const [popup, setPopup] =
    useState(null);

  const handleRegister = () => {

    if (
      username &&
      email &&
      password &&
      confirmPassword
    ) {

      setPopup({
        type: "success",
        title: "Success!",
        message:
          "Registrasi Berhasil! silahkan login.",
      });

    } else {

      setPopup({
        type: "failed",
        title: "Failed!",
        message:
          "Input masih ada yang kosong, silahkan lengkapi dulu akunmu.",
      });

    }
  };

  const handleClosePopup = () => {

    if (popup.type === "success") {
      navigate("/");
    }

    setPopup(null);
  };

  return (
    <div className="container">

      <div className="auth-page">

        <div className="logo"></div>

        <h2 className="brand-title">
          Youri
        </h2>

        <div className="form-group">
          <label>Username</label>

          <input
            type="text"
            className="input"
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            className="input"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            className="input"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>

          <input
            type="password"
            className="input"
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
          />
        </div>

        <button
          className="primary-btn"
          onClick={handleRegister}
        >
          Register
        </button>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="small-text">

          already have account?{" "}

          <span
            className="login-link"
            onClick={() => navigate("/")}
          >
            login
          </span>

        </p>

      </div>

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

export default Register;