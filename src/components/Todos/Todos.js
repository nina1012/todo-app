import './Todos.css';
import Todo from '../Todo/Todo';
const Todos = ({ todos, removeTodo, ...rest }) => {
  const className = `todos ${rest.mode ? 'dark' : 'light'}`;

  return (
    <div className={className}>
      {todos.map(todo => (
        <Todo
          updateCheckTodo={rest.updateCheckTodo}
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          mode={rest.mode}
        />
      ))}
    </div>
  );
};

export default Todos;
