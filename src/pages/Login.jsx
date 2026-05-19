import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaGoogle,
  FaLock,
  FaEnvelope,
  FaSignInAlt,
  FaUserPlus
} from "react-icons/fa";

import Popup from "../components/Popup";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [popup, setPopup] =
    useState(null);

  const handleLogin = () => {

    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {

      setPopup({
        type: "success",
        title: "Success!",
        message:
          "Login berhasil! menuju dashboard.",
      });

    } else {

      setPopup({
        type: "failed",
        title: "Failed!",
        message:
          "Email atau password salah.",
      });

    }
  };

  const handleClosePopup = () => {

    if (popup.type === "success") {
      navigate("/dashboard");
    }

    setPopup(null);
  };

  return (

    <div className="modern-auth">

      <div className="auth-card">

        <div className="auth-inner">

          <div className="sparkle">
            ✦
          </div>

          <img
            src="/mascot.png"
            className="mascot"
          />

          <h1 className="modern-title">
            Youri
          </h1>

          <p className="modern-subtitle">
            Welcome back!
          </p>

          {/* EMAIL */}

          <div className="modern-group">

            <label>Email</label>

            <div className="modern-input">

              <FaEnvelope />

              <input
                type="email"
                placeholder="your@email.com"
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

          </div>

          {/* PASSWORD */}

          <div className="modern-group">

            <label>Password</label>

            <div className="modern-input">

              <FaLock />

              <input
                type="password"
                placeholder="••••••••••"
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
              />

            </div>

          </div>

          {/* LOGIN */}

          <button
            className="modern-login-btn"
            onClick={handleLogin}
          >

            <FaSignInAlt />

            Login

          </button>

          <p className="forgot">
            forgot your password?
          </p>

          <div className="or-line">
            <span>or</span>
          </div>

          {/* GOOGLE */}

          <button className="google-modern">

            <FaGoogle />

            Continue with Google

          </button>

          {/* REGISTER */}

          <button
            className="register-modern"
            onClick={() =>
              navigate("/register")
            }
          >

            <FaUserPlus />

            Create New Account

          </button>

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

    </div>

  );
}

export default Login;