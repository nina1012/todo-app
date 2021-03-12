import PropTypes from 'prop-types';
import './Checkbox.css';
const Checkbox = ({ mode, darkMode, checked, done, updateCheckTodo, id }) => {
  const className = `checkbox ${mode || darkMode ? 'dark' : 'light'} ${
    checked ? 'checked' : ''
  }
  `;

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
      className={className}
      onClick={() => updateCheckTodo(id)}
      style={done ? rainboxBg : {}}
    >
      {done && <img src="./images/icon-check.svg" alt="check icon" />}
    </div>
  );
};

Checkbox.propTypes = {
  mode: PropTypes.bool,
  darkMode: PropTypes.bool,
  checked: PropTypes.bool,
  done: PropTypes.bool,
  updateCheckTodo: PropTypes.func,
  id: PropTypes.number
};

export default Checkbox;
