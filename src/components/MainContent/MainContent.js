import './MainContent.css';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import ToggleMode from '../ToggleMode/ToggleMode';
import Filter from '../Filter/Filter';
import Todos from '../Todos/Todos';

const MainContent = ({ darkMode, ...props }) => {
  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem('todos')) || []
  );

  const [filterDoneTodos, setFilterDoneTodos] = useState(null);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const randomId = () => {
    const id = Math.floor(Math.random() * 1000);
    if (todos.length === 0) {
      return 1;
    }
    // check if generated id already exists
    if (todos.some(item => item.id === id)) {
      return randomId();
    }
    return id;
  };

  const addTodo = todo => {
    todo.id = randomId();
    const copyTodos = todos.slice();
    copyTodos.push(todo);
    setTodos(copyTodos);
  };

  const removeTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateCheckTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
        return todo;
      }
      return todo;
    });
    setTodos(todos => updatedTodos);
  };

  const clearUndone = () => {
    const undone = todos.filter(todo => !todo.done);
    setTodos(todos => undone);
  };

  const filter = () => {
    if (filterDoneTodos == null) {
      return todos;
    }
    return todos.filter(todo => todo.done === filterDoneTodos);
  };

  const handleFilter = value => {
    setFilterDoneTodos(filterDoneTodos => value);
  };

  // DROP AND DRAG UPDATING FOR TODOS
  const handleOnDragEnd = result => {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  };

  const className = `main ${darkMode ? 'dark' : 'light'}`;

  // FILTERED TODOS: ALL, ACTIVE OR COMPLETED
  const filteredTodos = filter();
  return (
    <main className={className}>
      <ToggleMode {...props} />
      <Filter
        addTodo={addTodo}
        darkMode={darkMode}
        {...props}
        updateCheckTodo={updateCheckTodo}
      />
      <Todos
        handleOnDragEnd={handleOnDragEnd}
        todos={filteredTodos}
        removeTodo={removeTodo}
        updateCheckTodo={updateCheckTodo}
        mode={darkMode}
        clearUndone={clearUndone}
        handleFilter={handleFilter}
      />
      <div className="drag-drop">Drag and drop to reorder list</div>
    </main>
  );
};

MainContent.propTypes = {
  darkMode: PropTypes.bool,
  props: PropTypes.object
};

export default MainContent;
