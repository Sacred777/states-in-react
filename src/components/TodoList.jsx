import TodoItem from './TodoItem.jsx';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

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