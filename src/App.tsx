import { Provider } from 'react-redux';
import { store } from './store/store';
import { Routes } from './routes/routes';
import { Octokit } from "octokit";
import './App.css';

export const octokit = new Octokit({
  auth: import.meta.env.VITE_ACCESS_TOKEN,
})

function App() {
  console.log(import.meta.env.VITE_ACCESS_TOKEN)
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  )
}

export default App