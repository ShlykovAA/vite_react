import React from "react";

export interface IInput {
    type?: React.HTMLInputTypeAttribute;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputTask = ({ name, onChange, type = "text", value }: IInput) => {
    return <input value={value} type={type} onChange={onChange} name={name}/>
};


