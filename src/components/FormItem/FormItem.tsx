import React from "react";
import { ErrorMessage, useFormikContext } from "formik";
import cn from "classnames";
import styles from "./FormItem.module.css"

interface IFormItem {
    children: React.ReactNode;
    label: string;
    name: string;
}

const FormItem = ({ label, name, children }: IFormItem) => {
    const { errors, touched } = useFormikContext();
    const successful = !errors[name] && touched[name];
    const errorState = errors[name] && touched[name];
    return (<div className={styles["container"]}>
        <label className={cn({ 'foo-bar': successful, error: errorState})}>{label}</label>
        {children}
        <ErrorMessage name={name} />
    </div>)
}