import { Formik, Form, Field } from "formik";

interface IForm {
    name: string;
    email: string;
}

const initialValues: IForm = { name: "", email: "" }

export const FormikForm = () => {
    return (
    <Formik initialValues={initialValues} onSubmit={(values, formikBag)=>{
        console.log("Values: ", values);
        console.log("formikBag: ", formikBag);
    }}>
        {({touched, values, handleBlur, handleChange}) => {
            console.log("touched", touched)
            console.log("values", values)
            return (
            <Form>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <Field name="email" type="email" />
                </label>
                <br />
                <br />
                <button type="submit" disabled={!values.email || !values.name}>Submit</button>
            </Form>)
        }}
    </Formik>)
}