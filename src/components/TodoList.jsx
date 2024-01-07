import { useContext } from 'react';
import TodoItem from './TodoItem.jsx';
import { TodosContext } from '../contexts/todos';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <ul className="todo-list">
      {
        todos.length
          ? todos.map((todo) => (
              <TodoItem
                {...todo}
                key={todo.id}
              />
            )
          )
          : <h2>На сегодня дел нет</h2>
      }
    </ul>
  );
};

export default TodoList;