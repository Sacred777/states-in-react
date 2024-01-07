import './App.css';
import AddTodoForm from './components/AddTodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import { TodosProvider } from './contexts/todos';

function App() {

  return (
    <TodosProvider>
      <h1>Список дел</h1>
      <AddTodoForm/>
      <TodoList/>
    </TodosProvider>
  );
}

export default App;