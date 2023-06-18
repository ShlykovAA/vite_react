import { Provider } from 'react-redux';
import './App.css';
import { ThemeChanger } from './components/theme-changer/theme-changer';
import { TodoList } from './components/todo-list';
import { store } from './store/store';
import { Products } from './components/products';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Products /> */}
        <ThemeChanger />
        <TodoList />
      </div>
    </Provider>
  )
}

export default App