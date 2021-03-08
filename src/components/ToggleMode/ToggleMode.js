import './ToggleMode.css';
const ToggleMode = ({ changeMode, darkMode }) => {
  const icon = `./images/icon-${darkMode ? 'sun' : 'moon'}.svg`;
  return (
    <div className="toggle-mode-box">
      <h1>Todo</h1>
      <div className="toggle-mode-btn" onClick={changeMode}>
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default ToggleMode;
