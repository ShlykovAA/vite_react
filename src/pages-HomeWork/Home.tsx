import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import { UserProfile } from "./UserProfile";
import "./styles.css"

export const Home = ({ data }: any) => {
    const routeMatch = useRouteMatch();
    return (
        <div className="main_div">
            {data.map((user: any) => {
                return (
                    <div key={user.id} className="user_container">
                        <img src={user.avatar_url} className="user_avatar" />
                        <p>{user.login}</p>
                        <NavLink activeStyle={{color: "green"}} to={`/${user.id}`}>See more</NavLink>
                    </div>
                )
            })}
            <Switch>
                <Route path={`${routeMatch.path}:userId`}>
                    <UserProfile />
                </Route>
            </Switch>
        </div>
    )
};