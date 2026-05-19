import {
  FaUserCircle
} from "react-icons/fa";

import {
  useNavigate
} from "react-router-dom";

import {
  useState
} from "react";

function Navbar() {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] =
    useState(false);

  const [showLogoutModal,
    setShowLogoutModal] =
    useState(false);

  const handleLogout = () => {

    navigate("/");

  };

  return (
    <div className="navbar">

      <div className="nav-left">

        <FaUserCircle size={28} />

        <h3>Youri</h3>

      </div>

      <div className="profile-wrapper">

        <button
          className="profile-btn"
          onClick={() =>
            setShowMenu(!showMenu)
          }
        >
          Profile
        </button>

        {showMenu && (

          <div className="dropdown-menu">

            <button
              onClick={() =>
                navigate("/profile")
              }
            >
              Edit Profile
            </button>

            <button
              onClick={() =>
                setShowLogoutModal(true)
              }
            >
              Logout
            </button>

          </div>

        )}

      </div>

      {showLogoutModal && (

        <div className="popup-overlay">

          <div className="logout-modal">

            <h1>Konfirmasi</h1>

            <p>yakin mau logout?</p>

            <div className="logout-actions">

              <button
                className="cancel-btn"
                onClick={() =>
                  setShowLogoutModal(false)
                }
              >
                Batal
              </button>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Navbar;