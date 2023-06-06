import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FieldComponent } from "../../components/FieldComponent-HomeWork";

interface IInitialValues {
    firstName: string;
    lastName: string;
    email: string;
}

const initialValues: IInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
}

const validationSchema = Yup.object({
    firstName: Yup.string().min(4,"Too short").max(20,"Too long").required("Field is empty"),
    lastName: Yup.string().min(4,"Too short").max(20,"Too long").required("Field is empty"),
    email: Yup.string().email("Email incorrect").required("Field is empty")
});

export const FormikHomeWork = () => {
    const onSubmit = (values: IInitialValues) => {
        console.log("Submit:", values)
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(props) => {
                return (
                    <Form>
                        <FieldComponent fieldName="firstName" labelText="First Name:">
                            <Field name="firstName" type="text" />
                        </FieldComponent>
                        <FieldComponent fieldName="lastName" labelText="Last Name:">
                            <Field name="lastName" type="text" />
                        </FieldComponent>
                        <FieldComponent fieldName="email" labelText="Email:">
                            <Field name="email" type="email" />
                        </FieldComponent>
                        <button type="submit">Submit</button>
                    </Form>
                )
            }}
        </Formik>
    )
}