import { useState } from 'react';
import { addTodo } from '../store/index.js';
import { useDispatch } from 'react-redux';

const addTodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(text))

    setText('')
  }

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
        onClick={ (e) => onClickHandler(e)}>
        Добавить
      </button>
    </form>
  );
};

export default addTodoForm;