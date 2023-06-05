import React, { useContext } from "react";
import {toDoContext} from "../../providers/todo-providers"

export const ToDoButton = () => {
    const statusContext = useContext(toDoContext);
    return (<button onClick={()=>{
        statusContext.setStatus(statusContext.status === "wait" ? "done" : "wait")
    }}>All title {statusContext.status === "wait" ? "done" : "wait"}</button>)
}
