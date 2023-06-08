import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FormItemHomeWork } from "../../components/FormItem-HomeWork";

export interface IForm {
    firstName: string;
    lastName: string;
    email: string;
}

const validationSchema = yup.object({
    firstName: yup.string().required("Required").min(4,"Too short").max(20,"Too long"),
    lastName: yup.string().min(4,"Too short").max(20,"Too long").required("Required"),
    email: yup.string().required("Required").email("Incorrect Email"),
})

export const FormHomeWork = () => {
    const { handleSubmit, control, getValues } = useForm<IForm>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });
    const onSubmit = handleSubmit(() => {
        console.log("OnSubmit", getValues())
    });
    return (
        <form onSubmit={onSubmit}>
            <Controller
                name="firstName"
                control={control}
                render={({field, fieldState}) => {
                    return <FormItemHomeWork field={field} fieldState={fieldState} labelText="First Name:" />
                }} 
            />
            <br />
            <Controller
                name="lastName"
                control={control}
                render={({field, fieldState}) => {
                    return <FormItemHomeWork field={field} fieldState={fieldState} labelText="Last Name:" />
                }} 
            />
            <br />
            <Controller
                name="email"
                control={control}
                render={({field, fieldState}) => {
                    return <FormItemHomeWork field={field} fieldState={fieldState} labelText="Email:" />
                }} 
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}