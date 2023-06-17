import { useFormSelector } from "../../store-HomeWork/selectors/formSelector"

export const FormBoard = () => {
    const formData = useFormSelector();
    return (
        <div>
            {formData.map((item) => {
                return (
                    <div key={item.id}>
                        <p>First Name: {item.firstName}</p>
                        <p>Last Name: {item.lastName}</p>
                        <p>Email: {item.email}</p>
                    </div>
                )
            })}
        </div>
    )
}