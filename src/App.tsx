import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Octokit } from "octokit";
import { Home } from "./pages-HomeWork/Home";
import './App.css';

const octokit = new Octokit({
  auth: 'my_key'
})

export const usersData = await octokit.rest.users.list({per_page: 10});

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/"><h2>Home</h2></Link>
        <Switch>
          <Route path="/" >
            <Home data={usersData.data} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App