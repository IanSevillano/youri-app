function Popup({
  type,
  title,
  message,
  onClose,
}) {
  return (
    <div className="popup-overlay">

      <div className="modern-popup">

        <h1>{title}</h1>

        <p>{message}</p>

        <button
          className="popup-modern-btn"
          onClick={onClose}
        >
          Lanjutkan
        </button>

      </div>

    </div>
  );
}

export default Popup;