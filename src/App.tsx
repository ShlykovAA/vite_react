import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import { Home } from './pages/home';
import { storeHomeWork } from './store-HomeWork/store';

function App() {
  return (
    <Router>
      <Provider store={storeHomeWork}>
        <div className="App">
          <Switch>
            <Route path='/' component={() => <Home />}/>
          </Switch>
        </div>
      </Provider>
    </Router>
  )
}

export default App