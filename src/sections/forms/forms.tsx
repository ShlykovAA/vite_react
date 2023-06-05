import React from "react";

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