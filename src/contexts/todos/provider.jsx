import { useState } from 'react';
import { TodosContext } from './context.js';

export let todosActions = null;
export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  todosActions = {
    addTodo: (newTodo) => {
      setTodos([...todos, newTodo]);
    },

    toggleCompleted: (id) => {
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
    },

    deleteTodo: (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
  };

  return (
    <TodosContext.Provider value={{ todos }}>
      {children}
    </TodosContext.Provider>
  );
};