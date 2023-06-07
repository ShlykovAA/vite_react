import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

interface IForm {
    email: string;
    userName: string;
    password: string;
}

const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Incorrect email"),
    userName: Yup.string().required("Required"),
    password: Yup.string()
        .required("Required")
        .min(8,"Password is too short")
        .matches(/\d+/,"Password should have at least one number")
        .matches(/[A-Z]+/,"Password should have at least one uppercase letter"),
})

export const Form = () => {
    const [submitted, setSubmitted] = React.useState<boolean>(false);
    const { handleSubmit, register, formState, getValues, control } = useForm<IForm>({
        mode: "onBlur",
        resolver: yupResolver(validationSchema) 
    });

    const onSubmit = (values: any) => {
        setSubmitted(true);
    }
    const values = getValues();

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Email:
                    <input type="text" {...register('email')} />
                </label>
                { formState.errors.email && formState.touchedFields.email && (
                    <p>{formState.errors.email.message}</p>
                )}
                <br />
                <label>
                    User Name:
                    <Controller name="userName" defaultValue="" control={control} render={
                        ({field}) => <input {...field} />
                    } />
                </label>
                { formState.errors.userName && formState.touchedFields.userName && (
                    <p>{formState.errors.userName.message}</p>
                )}
                <br />
                <label>
                    Password:
                    <input type="text" {...register('password')} />
                </label>
                { formState.errors.password && formState.touchedFields.password && (
                    <p>{formState.errors.password.message}</p>
                )}
                <br />
                <button type="submit">Submit</button>
            </form>
            <div>
                <p>Email: {values.email}</p>
                <p>User Name: {values.userName}</p>
                <p>Password: {values.password}</p>
            </div>
        </>
    )
}