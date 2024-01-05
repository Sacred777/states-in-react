const TodoItem = ({ id, text, completed, toggleCompleted, deleteTodo }) => {

  return (
    <li>
      <div className="item-wrapper">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />
        <span>{text}</span>
      </div>
      <button onClick={() => deleteTodo(id)}>
        Удалить
      </button>
    </li>
  );
};

export default TodoItem;