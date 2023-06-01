import React, { FormEvent, FocusEvent } from "react";

// my version
// export const BlurForms = () => {
//     const [loginValid, setLoginValid] = React.useState(true)
//     return (
//         <form>
//             <input type="text" name="Login" onBlur={(event)=>{
//                 const target: any = event.target;
//                 const inputValid = target.value.length > 3;
//                 setLoginValid(inputValid)
//             }}/>
//             { !loginValid ? (
//                 <p>Error: Login is too short</p>
//             ) : (
//                 null
//             )}
//             <button type="submit" disabled={!loginValid}>Submit form</button>
//         </form>
//     )
// }

// class version

export const BlurForms = () => {
    const [error, setError] = React.useState(false)
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Submit")
    };
    const onBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
        setError(e.target.value.length < 3) 
    };
    const onClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {}
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" onBlur={onBlur} />
            { error && <p>Text is too short</p>}
            <button type="submit" disabled={error} onClick={onClick}>Submit Form</button>
        </form>
    )
}

export const Forms = () => {
    const [formValues, setFormValues] = React.useState({firstName: '', lastName: ''})
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                const target: any = e.target;
                const firstNameValid = target.elements.firstName.value.length > 2;
                const lastNameValid = target.elements.lastName.value.length > 2;
                if (firstNameValid && lastNameValid) {
                    setFormValues({
                        firstName: target.elements.firstName.value,
                        lastName: target.elements.lastName.value,
                    })
                } else {
                    console.error("Form filled incorrect")
                }
            }}>
                <input type="text" name="firstName" />
                <br />
                <input type="text" name="lastName" />
                <br />
                <button type="submit">Submit</button>
            </form>
            <p>First name: {formValues.firstName}</p>
            <p>Last name: {formValues.lastName}</p>
        </div>
    )
}