import './Todos.css';
import Todo from '../Todo/Todo';

const Todos = ({ todos, removeTodo, ...rest }) => {
  const className = `todos ${rest.mode ? 'dark' : 'light'}`;
  const box = `settings-box ${rest.mode ? 'dark' : 'light'}`;

  const activeState = e => {
    const spans = document.querySelectorAll('.filters > span');
    spans.forEach(span => (span.className = ''));
    e.target.className = 'active';
  };
  return (
    <div className={className}>
      <>
        {todos.map(todo => (
          <Todo
            updateCheckTodo={rest.updateCheckTodo}
            key={todo.id}
            {...todo}
            removeTodo={removeTodo}
            mode={rest.mode}
          />
        ))}
      </>

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
              rest.handleFilter(null);
            }}
          >
            All
          </span>
          <span
            id="2"
            onClick={e => {
              activeState(e);
              rest.handleFilter(false);
            }}
          >
            Active
          </span>
          <span
            id="3"
            onClick={e => {
              activeState(e);
              rest.handleFilter(true);
            }}
          >
            Completed
          </span>
        </div>
        <div className="right edge clear">
          <span onClick={rest.clearUndone}>Clear Completed</span>
        </div>
      </div>
    </div>
  );
};

export default Todos;
