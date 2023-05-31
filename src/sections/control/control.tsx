import React from "react"
import { ButtonAge } from "../../components/button"
import { InputTask, IInput } from "../../components/input-task"
import { AgeContext } from "../../providers/age"

const checkAge = (value: string) => {
    return parseInt(value) > 17;
}

export const ControlAge = () => {
    const [value, setValue] = React.useState("")
    const { setAge } = React.useContext(AgeContext)
    const onChange: IInput['onChange'] = (e) => {
        setValue(e.target.value)
    };
    const onClick = () => {
        setAge(parseInt(value))
    };
    return (
        <>
            <InputTask value={value} type="number" onChange={onChange} />
            <ButtonAge title="Submit" disabled={!checkAge(value)} onClick={onClick} />
        </>
    )
}