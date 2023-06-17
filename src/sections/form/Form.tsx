import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import * as yup from "yup";
import { FormItem } from "../../components/FormItem";
import { addForm } from "../../store-HomeWork/actions/formAction";

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

export const Form = () => {
    const { handleSubmit, control, getValues, reset } = useForm<IForm>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });
    const dispatch = useDispatch();

    const onSubmit = handleSubmit(() => {
        const fieldData = getValues();
        const fieldDataWithUniqId = { ...fieldData, id: uniqid() }
        dispatch(addForm(fieldDataWithUniqId))
        reset()
    });

    return (
        <form onSubmit={onSubmit}>
            <Controller
                name="firstName"
                control={control}
                render={({field, fieldState}) => {
                    return <FormItem field={field} fieldState={fieldState} labelText="First Name:" />
                }} 
            />
            <br />
            <Controller
                name="lastName"
                control={control}
                render={({field, fieldState}) => {
                    return <FormItem field={field} fieldState={fieldState} labelText="Last Name:" />
                }} 
            />
            <br />
            <Controller
                name="email"
                control={control}
                render={({field, fieldState}) => {
                    return <FormItem field={field} fieldState={fieldState} labelText="Email:" />
                }} 
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}