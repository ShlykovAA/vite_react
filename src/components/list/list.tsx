import { useState } from "react";
import "./list.css"

export const List = () => {
    const [arr, setArr] = useState([1,2,3,4,5]);
    return (
        <>
            <ul className="list">
                {arr.map((elem,index)=>{
                    return <li key={index}>Value is {elem}</li>
                })}
            </ul>
            <button onClick={() => setArr([...arr, arr.length + 1])} className="list">Add</button>
        </>
    )
}