import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <Link to="/profile">Go to profile</Link>
            <br />
            <Link to="/users">Go to users</Link>
        </div>
    )
}