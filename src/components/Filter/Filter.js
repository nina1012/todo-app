import { useState } from 'react';
import './Filter.css';
import Checkbox from '../Checkbox/Checkbox';
const Filter = ({ darkMode, addTodo }) => {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked(checked => !checked);
  };
  const className = `filter-box ${darkMode ? 'dark' : 'light'}`;

  const createNewTodo = e => {
    if (e.keyCode === 13) {
      addTodo({
        text: e.target.value,
        done: false
      });
      e.target.value = '';
    }
  };

  return (
    <div className={className}>
      <Checkbox
        darkMode={darkMode}
        checked={checked}
        toggleChecked={toggleChecked}
      />
      <input
        onKeyUp={e => createNewTodo(e)}
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default Filter;
