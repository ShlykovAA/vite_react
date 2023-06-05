import React from "react"
import styles from "./todo.module.scss"
import { TitleBox } from "../../components/title-box";
import { StatusProvider } from "../../providers/todo-providers";
import { ToDoButton } from "../../components/button-status/button-status";

export const ToDoList = () => {
    const [query, setQuery] = React.useState<string>("");
    const [mapLength, setMapLength ] = React.useState(0)
    const mapRef = React.useRef<any>(new Map());
    const keyRef = React.useRef<number>(0);
    const dataObj:any[] = []
    mapRef.current.forEach((value:string, key:number)=>{
        dataObj[key] = {id: key, title: value};
    })
    return (
        <StatusProvider>
        <div className={styles['main-container']}>
                <div className={styles['input_and_button']}>
                    <input className={styles['input']} type="text" value={query} onChange={(event) => {
                        setQuery(event.target.value)
                    }}/>
                    <button type="button" onClick={()=>{
                        mapRef.current.set(keyRef.current, query);
                        keyRef.current = keyRef.current + 1;
                        setQuery("")
                        setMapLength(mapRef.current.size)
                    }}>Add title</button>
                    <ToDoButton />
                </div>
                <div className={styles["card_control"]}>
                    { mapLength > 0 ? dataObj.map((value)=>{
                        return (<TitleBox key={value.id} text={value.title} onClick={()=>{
                            mapRef.current.delete(value.id)
                            setMapLength((mapRef.current.size))
                        }} />)
                    }) : <p>There is not a title</p>}
                </div>
        </div>
        </StatusProvider>
    )
}