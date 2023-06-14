import { useParams } from "react-router-dom";
import { usersData } from "../App";
import "./styles.css"

export const UserProfile = () => {
    const params = useParams<any>();
    const user = usersData.data.find((user) => user.id === +params.userId)
    return (
        <div className="all_info">
            <div>
                <img src={user?.avatar_url} className="user_avatar" />
            </div>
            <div>
                <h3>{user?.login}</h3>
                <h4>{user?.repos_url}</h4>
            </div>
            <div>
                <p>{user?.followers_url}</p>
                <p>{user?.subscriptions_url}</p>
            </div>
        </div>
    )
};