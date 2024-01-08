import {} from 'redux';

const initialState = {
  todos: [],
};

const ADD_TODO = 'ADD_TODO';
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const toggleCompleted = (id) => ({
  type: TOGGLE_COMPLETED,
  id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.text,
            completed: false,
          }
        ]
      };

    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(
          todo => {
            if (todo.id !== action.id) return todo;

            return {
              ...todo,
              completed: !todo.completed,
            };
          }
        )
      };

    case
    DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    default:
      return state;
  }
};
