import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface IHomeWork {
    firstName: string;
    lastName: string;
}

const initialValues: IHomeWork = { firstName: "", lastName: "" }

const validationHomeWork = Yup.object({
    firstName: Yup.string().min(3, "First name is too short"),
    lastName: Yup.string().min(3, "Last name is too short"),
})

export const FormikHomeWork = () => {
    const [errorState, setErrorState] = React.useState<any>({firstName: "", lastName: ""})
    const [valueState, setValueState] = React.useState<any>({firstName: "", lastName: ""})
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationHomeWork}
            onSubmit={(values) => {
                setValueState({firstName: values.firstName, lastName: values.lastName})
            }}
        >
            {({errors}) => {
                return (
                    <Form>
                        <label>
                            First Name:
                            <Field name="firstName" type="text" />
                            <p style={{color: "red"}}>{errorState.firstName}</p>
                        </label>
                        <br />
                        <label>
                            Last Name:
                            <Field name="lastName" type="text" />
                            <p style={{color: "red"}}>{errorState.lastName}</p>
                        </label>
                        <br />
                        <button
                            type="submit"
                            onClick={() => {
                                setErrorState({firstName: errors.firstName, lastName: errors.lastName})
                            }}
                        >
                            Submit
                        </button>
                        <br />
                        <h3>{`${valueState.firstName && valueState.lastName ? "Hello!!!" : ""} ${valueState.firstName} ${valueState.lastName}`}</h3>
                    </Form>
                )
            }}
        </Formik>
    )
}