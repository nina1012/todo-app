import './MainContent.css';

import { useState, useEffect } from 'react';
import ToggleMode from '../ToggleMode/ToggleMode';
import Filter from '../Filter/Filter';

const MainContent = props => {
  const initialTodos = [
    { id: 1, text: 'Do the dishes', done: false },
    { id: 2, text: 'Walk the dog', done: true },
    { id: 3, text: 'Watch react course', done: true }
  ];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', initialTodos);
  });

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

  const className = `main ${props.darkMode ? 'dark' : 'light'}`;
  return (
    <main className={className}>
      <ToggleMode {...props} />
      <Filter addTodo={addTodo} {...props} />
      <ul>
        {todos.map(todo => (
          <li onClick={() => removeTodo(todo.id)} key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MainContent;
