import React from "react"
import { ButtonAge } from "../../components/button"
import { InputTask, IInput } from "../../components/input-task"

const checkAge = (value: string) => {
    return parseInt(value) > 17;
}

export const ControlAge = () => {
    const [value, setValue] = React.useState("")
    const onChange: IInput['onChange'] = (e) => {
        setValue(e.target.value)
    };
    const onClick = () => {};
    console.log(value)
    return (
        <>
            <InputTask value={value} type="number" onChange={onChange} />
            <ButtonAge title="Submit" disabled={!checkAge(value)} onClick={onClick} />
        </>
    )
}