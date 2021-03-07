import './ToggleMode.css';
const ToggleMode = ({ changeMode, darkMode }) => {
  return (
    <div className="toggle-mode-box">
      <h1>Todo</h1>
      <div className="toggle-mode-btn" onClick={changeMode}>
        {darkMode ? (
          <img src="./images/icon-sun.svg" alt="icon" />
        ) : (
          <img src="./images/icon-moon.svg" alt="icon" />
        )}
      </div>
    </div>
  );
};

export default ToggleMode;
