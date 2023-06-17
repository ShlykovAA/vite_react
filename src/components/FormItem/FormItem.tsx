import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { IForm } from "../../sections/form/index";
import cn from "classnames";
import styles from "./FormItem.module.scss";

interface IFormItem {
    field: ControllerRenderProps<IForm, any>;
    fieldState: ControllerFieldState;
    labelText: string;
}

export const FormItem = ({ field, fieldState, labelText }: IFormItem) => {
    const inputState = fieldState.isTouched && !fieldState.invalid && fieldState.isDirty;
    const inputError = fieldState.isTouched && fieldState.invalid;
    return (
        <div className={styles["container"]}>
            <label>
                {labelText}
            </label>
            <input {...field} className={cn(styles["field"], {
                [styles["success"]]: inputState,
                [styles["error"]]: inputError,
            })} />
            { fieldState.invalid && fieldState.isTouched ? (
                    <span style={{color: "red"}}>{fieldState.error?.message}</span>
                ) : (
                    null
                )
            }
        </div>
    )
}