import './Todo.css';
import Checkbox from '../Checkbox/Checkbox';
const Todo = ({ text, id, done, removeTodo, updateCheckTodo, mode }) => {
  const doneStyle = {
    textDecoration: 'line-through',
    color: `${
      mode ? 'var(--very-dark-grayish-blue)' : ' var(--light-grayish-blue)'
    }`
  };

  return (
    <div className="todo" style={done ? doneStyle : {}}>
      <Checkbox
        done={done}
        updateCheckTodo={updateCheckTodo}
        id={id}
        mode={mode}
      />
      <div
        className="todo-text"
        onClick={() => {
          updateCheckTodo(id);
        }}
      >
        {text}
      </div>
      <img
        onClick={e => removeTodo(id)}
        className="cross"
        src="./images/icon-cross.svg"
        alt="cross icon"
      />
    </div>
  );
};

export default Todo;
