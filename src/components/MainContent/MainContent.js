import './MainContent.css';

import { useState } from 'react';
import ToggleMode from '../ToggleMode/ToggleMode';
import Filter from '../Filter/Filter';
import Todos from '../Todos/Todos';

const MainContent = props => {
  const initialTodos = [
    { id: 1, text: 'Do the dishes', done: false },
    { id: 2, text: 'Walk the dog', done: true },
    { id: 3, text: 'Watch react course', done: true }
  ];
  const [todos, setTodos] = useState(initialTodos || []);

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
 
  const className = `main ${props.darkMode ? 'dark' : 'light'}`;
  return (
    <main className={className}>
      <ToggleMode {...props} />
      <Filter addTodo={addTodo} {...props} updateCheckTodo={updateCheckTodo} />
      <Todos
        todos={todos}
        removeTodo={removeTodo}
        updateCheckTodo={updateCheckTodo}
        mode={props.darkMode}
      />
    </main>
  );
};

export default MainContent;
