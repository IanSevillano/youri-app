function LevelPopup({

  level,

  title,

  onClose,

}) {

  return (

    <div className="popup-overlay">

      <div className="level-modal">

        <img
          src="/sprites/happy.gif"
          className="level-sprite"
        />

        <h1>
          LEVEL UP 🎉
        </h1>

        <h2>

          Level {level}

        </h2>

        <p>
          {title}
        </p>

        <button
          onClick={onClose}
        >

          Keren!

        </button>

      </div>

    </div>

  );
}

export default LevelPopup;