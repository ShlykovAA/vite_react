import React from "react";

export const FormHomeWork = () => {
    const [formValid, setFormValid] = React.useState({firstName: true, lastName: true})

    return (
        <div >
            <form
                style={{
                    display: "flex",
                    flexDirection: "column"
                }} 
                onSubmit={(event) => {
                event.preventDefault();
                const target: any = event.target;
                const firstNameValid = target.elements.firstName.value.length > 3;
                const lastNameValid = target.elements.lastName.value.length > 3;
                setFormValid({firstName: firstNameValid, lastName: lastNameValid})
            }}>
                <input type="text" name="firstName" />
                { !formValid.firstName ? (
                    <p style={{color: "red", margin: "0"}}>First name is too short</p>
                ) : (
                    null
                )}
                <input type="text" name="lastName" />
                { !formValid.lastName ? (
                    <p style={{color: "red", margin: "0"}}>Last name is too short</p>
                ) : (
                    null
                )}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}