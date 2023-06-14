import { useHistory, useLocation, useParams } from "react-router-dom";
import { users } from "./users"

export const UserProfile = () => {
    const params = useParams<any>();
    const history = useHistory()
    // const user = users[params.userId - 1]
    const user = users.find((user) => user.id === params.userId)
    console.log(history)
    
    return <div>
        <h3>{user?.name}</h3>
        <h4>{user?.age}</h4>
        <button onClick={history.goForward}>Go Forward</button>
        <button onClick={history.goBack}>Go Back</button>
        <button onClick={() => history.go(-1)}>Go to -1</button>
        <button onClick={() => history.push("/users")}>Go push</button>
        <button onClick={() => {history.replace("/users")}}>Go replace</button>
    </div>
}