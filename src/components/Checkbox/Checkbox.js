import './Checkbox.css';
const Checkbox = ({
  darkMode,
  checked,
  toggleChecked,
  done,
  updateCheckTodo,
  id
}) => {
  const mode = `checkbox ${checked ? 'checked' : ''} ${
    darkMode ? 'dark' : 'light'
  }`;

  const rainboxBg = {
    border: '1px solid transparent',
    backgroundImage:
      'linear-gradient(hsl(235, 24%, 19%), hsl(235, 24%, 19%)) ,linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
    borderImage: '20% round'
  };

  return (
    <div
      className={mode}
      onClick={() => {
        // toggleChecked();
        updateCheckTodo(id);
      }}
      style={done ? rainboxBg : {}}
    >
      {done && <img src="./images/icon-check.svg" alt="check icon" />}
    </div>
  );
};

export default Checkbox;
