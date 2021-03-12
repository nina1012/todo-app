import './Todo.css';
import Checkbox from '../Checkbox/Checkbox';
import { Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

const Todo = ({ text, id, done, removeTodo, updateCheckTodo, mode, index }) => {
  const doneStyle = {
    textDecoration: 'line-through',
    color: `${
      mode ? 'var(--very-dark-grayish-blue)' : ' var(--light-grayish-blue)'
    }`
  };

  return (
    <Draggable draggableId={id + ''} index={index}>
      {provided => (
        <div
          className="todo"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Checkbox
            done={done}
            updateCheckTodo={updateCheckTodo}
            id={id}
            mode={mode}
          />
          <div
            className="todo-text"
            style={done ? doneStyle : {}}
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
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
};

Todo.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  done: PropTypes.bool,
  removeTodo: PropTypes.func,
  updateCheckTodo: PropTypes.func,
  mode: PropTypes.bool,
  index: PropTypes.number
};

export default Todo;
