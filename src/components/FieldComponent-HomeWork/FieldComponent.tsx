import React from "react";
import { ErrorMessage, FormikContextType, useFormikContext } from "formik";
import styles from "./FieldComponent.module.scss";

interface IFieldComp<T> {
    children: React.ReactNode;
    labelText: string;
    fieldName: keyof T;
} 

export function FieldComponent<T = string> ({ children, labelText, fieldName }: IFieldComp<T>) {
    const { errors, touched }: FormikContextType<T> = useFormikContext();
    const successState = !errors[fieldName] && touched[fieldName];
    return (
        <div className={styles["container"]}>
            <label>{labelText}</label>
            {children}
            <ErrorMessage component="span" name={fieldName.toString()} className={styles["error"]}/>
            { successState ? (<span className={styles["successful"]}>Successful</span>) : null }
        </div>
    )
}