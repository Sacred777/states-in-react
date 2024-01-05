import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <ul className='todo-list'>
      {
        todos.length
          ? todos.map((todo) => (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
            )
          )
          : <h2>На сегодня дел нет</h2>
      }
    </ul>
  );
};

export default TodoList;