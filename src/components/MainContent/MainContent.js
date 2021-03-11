import './MainContent.css';

import { useState } from 'react';
import ToggleMode from '../ToggleMode/ToggleMode';
import Filter from '../Filter/Filter';
import Todos from '../Todos/Todos';

const MainContent = props => {
  const initialTodos = [
    { id: 1, text: 'Complete online JavaScript course', done: true },
    { id: 2, text: 'Jog around the park 3x', done: false },
    { id: 3, text: '10 minutes meditation', done: false },
    { id: 4, text: 'Read for 1 hour', done: false },
    { id: 5, text: 'Pick up groceries', done: false },
    { id: 6, text: 'Complete Todo App on Frontend Mentor', done: false }
  ];
  const [todos, setTodos] = useState(initialTodos || []);
  const [filterDoneTodos, setFilterDoneTodos] = useState(null);

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

  const className = `main ${props.darkMode ? 'dark' : 'light'}`;
  // filtered todos: all, active or completed
  const filteredTodos = filter();
  return (
    <main className={className}>
      <ToggleMode {...props} />
      <Filter addTodo={addTodo} {...props} updateCheckTodo={updateCheckTodo} />
      <Todos
        todos={filteredTodos}
        removeTodo={removeTodo}
        updateCheckTodo={updateCheckTodo}
        mode={props.darkMode}
        clearUndone={clearUndone}
        handleFilter={handleFilter}
      />
      <div className="drag-drop">Drag and drop to reorder list</div>
    </main>
  );
};

export default MainContent;
