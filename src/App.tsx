import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import { store } from './store/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">

        </div>
      </Provider>
    </Router>
  )
}

export default App