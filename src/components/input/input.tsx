import React, { useEffect, useState } from "react";
import styles from "./input.module.scss"

interface IInput {
    type: string;
    labelText: string;
    idForLabel: string;
    onChange?: (arg: any)=> void;
}

export const Input: React.FC<IInput> = ({type, labelText, idForLabel, onChange}) => {
    return (
        <div className={styles["input_box"]}>
            <label htmlFor={idForLabel}>{labelText}</label>
            <input type={type} id={idForLabel} className={styles["input_style"]} onChange={onChange} />
        </div>
    );
};