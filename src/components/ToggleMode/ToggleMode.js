import './ToggleMode.css';
import PropTypes from 'prop-types';
const ToggleMode = ({ changeMode, darkMode }) => {
  const icon = `./images/icon-${darkMode ? 'moon' : 'sun'}.svg`;
  return (
    <div className="toggle-mode-box">
      <h1>Todo</h1>
      <div className="toggle-mode-btn" onClick={changeMode}>
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
};

ToggleMode.propTypes = {
  changeMode: PropTypes.func,
  darkMode: PropTypes.bool
};

export default ToggleMode;
