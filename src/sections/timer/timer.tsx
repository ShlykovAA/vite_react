import React, { useEffect } from "react"

export const Timer = () => {
    const [seconds, setSeconds] = React.useState<number>(0)
    const [started, setStarted] = React.useState(false)

    const onStart = () => {
        setStarted(true);
    };
    const onStop = () => {
        setStarted(false);
    };
    const onReset = () => {
        setStarted(false);
        setSeconds(0);
    };

    useEffect(()=>{
        if (started) {
            setTimeout(()=>{
                setSeconds(seconds + 1)
            }, 1000)
        }
    },[started, seconds])

    return (
        <div>
            <h1>{seconds}</h1>
            <button onClick={onStart}>Start</button>
            <button onClick={onStop}>Stop</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}