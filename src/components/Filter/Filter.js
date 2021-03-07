import { useState } from 'react';
import './Filter.css';
import Checkbox from '../Checkbox/Checkbox';
const Filter = ({ darkMode, handleSubmit, addTodo }) => {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked(checked => !checked);
  };
  const className = `filter-box ${darkMode ? 'dark' : 'light'}`;

  return (
    <form className={className} onSubmit={e => addTodo(e)}>
      <Checkbox
        darkMode={darkMode}
        checked={checked}
        toggleChecked={toggleChecked}
      />
      <input type="text" placeholder="Create a new todo..." />
    </form>
  );
};

export default Filter;
