import { useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleted } from '../store/index.js';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="item-wrapper">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleCompleted(id))}
        />
        <span>{text}</span>
      </div>
      <button onClick={() => dispatch(deleteTodo(id))}>
        Удалить
      </button>
    </li>
  );
};

export default TodoItem;