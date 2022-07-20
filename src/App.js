import logo from './logo.svg';
import './App.css';
import Search from './components/search/Search';
import TodoApp from './components/todoApp/TodoApp';

function App() {
  return (
    <div className="container-fluid text-center">
       <Search/>
       <TodoApp/>
    </div>
  );
}

export default App;
