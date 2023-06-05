import React from "react";

interface IToDoContext {
    status: "done" | "wait";
    setStatus: (arg:"done" | "wait") => void;
}

export const toDoContext = React.createContext<IToDoContext>({status: "wait", setStatus: ()=>{}});

interface IStatusProvider {
    children: React.ReactNode;
}

export const StatusProvider = ({children} : IStatusProvider) => {
    const [status, setStatus] = React.useState<"done" | "wait">("wait");
    return (
        <toDoContext.Provider value={{status, setStatus}}>
            {children}
        </toDoContext.Provider>
    )
}