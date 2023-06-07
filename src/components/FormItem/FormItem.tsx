import React from "react";
import cn from "classnames";
import styles from "./FormItem.module.css"

interface IFormItem {
    children: React.ReactNode;
    label: string;
    name: string;
}

export const FormItem = ({ label, name, children }: IFormItem) => {
    // const { errors, touched }: FormikContextType<any> = useFormikContext();
    // const successful = !errors[name] && touched[name];
    // const errorState = errors[name] && touched[name];
    return (<div className={styles["container"]}>
        <label
            className={cn(styles['label'], {
                [styles["success"]]: "successful",
                [styles["error"]]: "errorState",
            })}
        >
            {label}
        </label>
        {children}
        {/* <ErrorMessage name={name} component="div" className={cn(styles["error"], styles["mt-8"])} /> */}
    </div>)
}