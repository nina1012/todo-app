import './Checkbox.css';
const Checkbox = ({ darkMode, checked, toggleChecked }) => {
  const mode = `checkbox ${checked ? 'checked' : ''} ${
    darkMode ? 'dark' : 'light'
  }`;
  return (
    <div className={mode} onClick={toggleChecked}>
      <img src="./images/icon-check.svg" alt="check icon" />
    </div>
  );
};

export default Checkbox;
