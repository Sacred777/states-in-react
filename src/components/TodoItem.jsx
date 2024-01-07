import { todosActions } from '../contexts/todos';

const TodoItem = ({ id, text, completed }) => {

  return (
    <li>
      <div className="item-wrapper">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => todosActions.toggleCompleted(id)}
        />
        <span>{text}</span>
      </div>
      <button onClick={() => todosActions.deleteTodo(id)}>
        Удалить
      </button>
    </li>
  );
};

export default TodoItem;