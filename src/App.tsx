import { Provider } from 'react-redux';
import './App.css';
import { store } from './store/store';
import { Routes } from './routes/routes';

function App() {
  console.log(import.meta.env)
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  )
}

export default App