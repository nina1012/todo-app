import './Todos.css';
import Todo from '../Todo/Todo';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

const Todos = ({
  todos,
  removeTodo,
  mode,
  handleOnDragEnd,
  updateCheckTodo,
  handleFilter,
  clearUndone
}) => {
  const className = `todos ${mode ? 'dark' : 'light'}`;
  const box = `settings-box ${mode ? 'dark' : 'light'}`;

  const activeState = e => {
    const spans = document.querySelectorAll('.filters > span');
    spans.forEach(span => (span.className = ''));
    e.target.className = 'active';
  };
  return (
    <div className={className}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="list">
          {provided => (
            <ul
              className="list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {todos.map((todo, index) => (
                <Todo
                  updateCheckTodo={updateCheckTodo}
                  key={todo.id}
                  {...todo}
                  removeTodo={removeTodo}
                  mode={mode}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <div className={box}>
        <div className="left edge">
          <span>{todos.length} items left</span>
        </div>
        <div className="divider"></div>
        <div className="filters">
          <span
            className="active"
            id="1"
            onClick={e => {
              activeState(e);
              handleFilter(null);
            }}
          >
            All
          </span>
          <span
            id="2"
            onClick={e => {
              activeState(e);
              handleFilter(false);
            }}
          >
            Active
          </span>
          <span
            id="3"
            onClick={e => {
              activeState(e);
              handleFilter(true);
            }}
          >
            Completed
          </span>
        </div>
        <div className="right edge clear">
          <span onClick={clearUndone}>Clear Completed</span>
        </div>
      </div>
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array,
  removeTodo: PropTypes.func,
  mode: PropTypes.bool,
  handleOnDragEnd: PropTypes.func,
  updateCheckTodo: PropTypes.func,
  handleFilter: PropTypes.func,
  clearUndone: PropTypes.func
};

export default Todos;
