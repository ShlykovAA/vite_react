import React from "react";
import styles from "./title-box.module.scss"
import { toDoContext } from "../../providers/todo-providers";

interface ITitleBox {
    text: string;
    onClick: (arg:any) => void;
}

export const TitleBox: React.FC<ITitleBox> = ({text, onClick}) => {
    const context = React.useContext(toDoContext)
    return (
        <div className={`${styles['title_card']} ${styles[context.status]}`}>
            <p>{text}</p>
            <button className={styles["todo_button"]} type="button" onClick={onClick}>Delete</button>
        </div>
    )
}

