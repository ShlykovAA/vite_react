import { useForm } from "react-hook-form"

interface IForm {
    name: string;
    email: string;
}

export const Form = () => {
    const { formState, getValues, handleSubmit, register, watch } = useForm<IForm>({
        mode: "onSubmit",
        reValidateMode: "onBlur",
        defaultValues: {name: "", email: ""},
        criteriaMode: "firstError",
        shouldFocusError: true,
    });

    console.log("formState", formState)
    console.log("watch", watch("name"))
    console.log("watch[]", watch(['name', 'email']))
    console.log("getValues", getValues())

    const onSubmit = (values: any, event: any) => {
        console.log("onSubmit", values)
        console.log("onSubmit 2", event)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name:
                <input type="text" {...register('name')} />
            </label>
            <label>
                Email:
                <input type="text" {...register('email')} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}