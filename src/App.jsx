import './App.css';
import AddTodoForm from './components/AddTodoForm.jsx';
import { useState } from 'react';
import TodoList from './components/TodoList.jsx';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (value) => {
    setText(value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text,
          completed: false,
        }
      ]);
      setText('');
    }
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== id) return todo;

          return {
            ...todo,
            completed: !todo.completed,
          };
        }
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <h1>Список дел</h1>

      <AddTodoForm
        text={text}
        handleChange={handleChange}
        addTodo={addTodo}
      />

      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;