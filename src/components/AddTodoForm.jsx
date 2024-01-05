const addTodoForm = ({ text, handleChange, addTodo }) => {
  return (
    <form className="form">
      <label>
        Что нужно сделать?
        <input
          type="text"
          value={text}
          onChange={(e) => handleChange(e.target.value)}/>
      </label>
      <button
        type="submit"
        onClick={e => addTodo(e)}>
        Добавить
      </button>
    </form>
  );
};

export default addTodoForm;