import React from "react";
import { useTodoSelector } from "../../store/selectors/todoSelectors"
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/action/action";

export const TodoList = () => {
    const [todo, setTodo] = React.useState("");
    const todoList = useTodoSelector();
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(addTodo(todo))
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                />
                <button onClick={onClick}>Add todo</button>
            </div>
            {todoList.map((item:string, index: number) => {
                return <p key={index}>{item}</p>
            })}
        </div>
    )
}