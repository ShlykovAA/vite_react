import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom"
import { UserProfile } from "./userProfile"

export const users = [
    {id: "1", name: 'Taras', age: 12},
    {id: "2", name: 'Ahmed', age: 54},
    {id: "3", name: 'Volodya', age: 34},
    {id: "4", name: 'Sasha', age: 27},
]

export const Users = () => {
    const routeMatch = useRouteMatch();
    console.log(routeMatch)
    return (
        <div>
            <Link to="/">Go home</Link>
            <ul>
                {users.map(user => {
                    return <li key={user.id}>
                        <NavLink activeStyle={{color: "gray"}} to={`/users/${user.id}`}>{user.name}</NavLink>
                    </li>
                })}
            </ul>
            <Switch>
                <Route path={`${routeMatch.path}/:userId`}>
                    <UserProfile />
                </Route>
            </Switch>
        </div>
    )
}