import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface IForm {
    name: string;
    email: string;
    terms: boolean;
}

const initialValues: IForm = { name: "", email: "", terms: false }

const validationSchema = Yup.object({
    name: Yup.string().min(4,"Name is too short").required(),
    email: Yup.string().email("Please, enter correct email").required(),
    terms: Yup.boolean().required("Rec check"),
})

export const FormikForm = () => {
    return (
    <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values, formikBag)=>{
            console.log("Values: ", values);
            console.log("formikBag: ", formikBag);
        }}
    >
        {({touched, values, errors, handleBlur, handleChange, isValid}) => {
            console.log("touched", touched)
            console.log("values", values)
            console.log("errors", errors)
            return (
            <Form>
                <Field name="terms" type="checkbox" checked={values.terms} onBlur={handleBlur} onChange={handleChange} />
                <br />
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    <p style={{color: "red"}}>{errors.name}</p>
                </label>
                <br />
                <label>
                    Email:
                    <Field name="email" type="email" />
                    <p style={{color: "red"}}>{errors.email}</p>
                </label>
                <br />
                <br />
                <button type="submit" disabled={!isValid}>Submit</button>
            </Form>)
        }}
    </Formik>)
}