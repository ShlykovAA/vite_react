import React from "react";

interface IButton {
    title: string;
    onClick: ()=>void;
}

const Button = ({ title, onClick}: IButton) => {
    return <button onClick={onClick}>{title}</button>
}

interface ICounter {
    children: (count: number, onCountUpdate: () => void) => React.ReactNode;
}

const Counter = ({ children }: ICounter) => {
    const [count, setCount] = React.useState(0);
    const onCountUpdate = () => {
        setCount(count + 1);
    }
    return <div>{children(count, onCountUpdate)}</div>
}

export const RenderProps = () => {
    return <div>
        <Counter>
            {(count, onCountUpdate) => {
                return <>
                    <p>Count: {count}</p>
                    <Button title="Increase Count" onClick={onCountUpdate} />
                </>
            }}
        </Counter>
    </div>
}