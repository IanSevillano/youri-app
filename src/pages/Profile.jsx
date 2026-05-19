import { useState } from "react";

import {
  FaArrowLeft
} from "react-icons/fa";

import {
  useNavigate
} from "react-router-dom";

function Profile() {

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("Septian");

  const [email, setEmail] =
    useState("admin@gmail.com");

  const handleSave = () => {
    alert("Profile updated!");
  };

  return (
    <div className="modern-auth">

      <div className="auth-card">

        <button
          className="back-btn"
          onClick={() =>
            navigate("/dashboard")
          }
        >
          <FaArrowLeft />
        </button>

        <img
          src="/mascot.png"
          className="mascot"
        />

        <h1 className="modern-title">
          Profile
        </h1>

        {/* USERNAME */}

        <div className="modern-group">

          <label>Username</label>

          <div className="modern-input">

            <input
              type="text"
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target.value
                )
              }
            />

          </div>

        </div>

        {/* EMAIL */}

        <div className="modern-group">

          <label>Email</label>

          <div className="modern-input">

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

          </div>

        </div>

        <button
          className="modern-login-btn"
          onClick={handleSave}
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default Profile;