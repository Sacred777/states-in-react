import './App.css';
import AddTodoForm from './components/AddTodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import { Provider } from 'react-redux';
import { rootReducer } from './store/index.js';
import { createStore } from 'redux';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {

  return (
    <Provider store={store}>
      <h1>Список дел</h1>
      <AddTodoForm/>
      <TodoList/>
    </Provider>
  );
}

export default App;