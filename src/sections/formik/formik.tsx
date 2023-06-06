import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface IFormValues {
    firstName: string;
    university: string;
    student: boolean;
}

const initialValues = {
    firstName: "",
    university: "",
    student: false,
}

const validationSchema = Yup.object({
    firstName: Yup.string().required("Required").min(5,"Name is too short"),
    university: Yup.string().when("student",{
        is: true,
        then: (schema) => schema.required("Required").test("university-name", "Not correct university", (value, context) => {
            console.log(context)
            return value.toLowerCase() === "university" && context.parent.student
        }),
        otherwise: (schema) => schema.notRequired()
    }),
    student: Yup.boolean(),
})

export const FormikForm = () => {
    const onSubmit = (values: IFormValues) => {
        console.log("submit", values)
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
            {({ values, errors, isValid, setFieldValue, handleChange, ...rest})=>{
                // console.log("Rest",rest);
                return (
                    <Form>
                        <label>
                            First Name:
                            <Field name="firstName" type="text" />
                            <ErrorMessage component="div" name="firstName" />
                        </label>
                        <br />
                        <label>
                            University:
                            <Field name="university" type="text" disabled={!values.student} />
                            <ErrorMessage component="div" name="university" />
                        </label>
                        <br />
                        <label>
                            Student:
                            <Field name="student" type="checkbox" onChange={(event:any) => {
                                setFieldValue("university","");
                                handleChange(event)
                            }} />
                        </label>
                        <br />
                        <button type="submit" disabled={!isValid}>Submit</button>
                    </Form>
                )
            }}
        </Formik>
    )
}