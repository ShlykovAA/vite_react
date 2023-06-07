import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

interface IForm {
    firstName: string;
    lastName: string;
}

const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
})

export const Form = () => {
    const [submitted, setSubmitted] = React.useState<boolean>(false);
    const { handleSubmit, register, formState, getValues } = useForm<IForm>({
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
                    First Name:
                    <input type="text" {...register('firstName')} />
                </label>
                { formState.errors.firstName && formState.touchedFields.firstName && (
                    <p>{formState.errors.firstName.message}</p>
                )}
                <br />
                <label>
                    Last Name:
                    <input type="text" {...register('lastName')} />
                </label>
                { formState.errors.lastName && formState.touchedFields.lastName && (
                    <p>{formState.errors.lastName.message}</p>
                )}
                <br />
                <button type="submit">Submit</button>
            </form>
            <div>
                <p>First name: {values.firstName}</p>
                <p>Last name: {values.lastName}</p>
            </div>
        </>
    )
}