import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, RouteProps, Redirect } from "react-router-dom"
import { Home } from "./pages/home";
import { Profile } from "./pages/profile";
import { Users } from "./pages/users";
import './App.css';
import { set } from "react-hook-form";

interface IProtectedRoute extends RouteProps {
  admin: boolean;
}

const ProtectedRoute = ({children, admin, ...rest }: IProtectedRoute) => {
  return (
    <Route
      {...rest}
      render={({ history, location, match }) => {
        return admin ? <>{children}</> : <Redirect to='/' />;
      }}
    />
  )
}

function App() {
  const [admin, setAdmin] = React.useState(false)
  return (
    <Router>
      <div className="App">
        <button onClick={() => {setAdmin(!admin)}}>Admin: {`${admin}`}</button>
        <Switch>
          <ProtectedRoute path="/profile" exact={true} admin={admin} >
            <Profile />
          </ProtectedRoute>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App