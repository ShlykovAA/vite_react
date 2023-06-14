import { Link } from "react-router-dom"

export const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <Link to="/">Go to home</Link>
            <br />
            <Link to="/users">Go to users</Link>
        </div>
    )
}