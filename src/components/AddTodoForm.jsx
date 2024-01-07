import { useState } from 'react';
import { todosActions } from '../contexts/todos';

const AddTodoForm = () => {
  const [text, setText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();

    todosActions.addTodo({
      id: Date.now(),
      text,
      completed: false,
    });

    setText('');
  };

  return (
    <form className="form">
      <label>
        Что нужно сделать?
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}/>
      </label>
      <button
        type="submit"
        onClick={e => addTodo(e)}>
        Добавить
      </button>
    </form>
  );
};

export default AddTodoForm;