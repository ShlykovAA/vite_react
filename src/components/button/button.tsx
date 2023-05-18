import React from "react";
import styles from "./button.module.scss"

interface IButton {
    buttonText: string;
    onClick: ()=> void;
}

export const Button: React.FC<IButton> = ({buttonText, onClick}) => {
    return (<button className={styles["button"]} type="button" onClick={onClick}>{buttonText}</button>)
};