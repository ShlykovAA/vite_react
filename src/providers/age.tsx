import React from "react";

interface IAgeContext {
    age: number;
    setAge: (arg: number) => void;
}

export const AgeContext = React.createContext<IAgeContext>({age: 0, setAge: () => {}})

interface IAgeProvider {
    children: React.ReactNode
}

export const AgeProvider = ({children}: IAgeProvider) => {
    const [age, setAge] = React.useState<number>(0)
    return <AgeContext.Provider value={{age, setAge}}>
        {children}
    </AgeContext.Provider>
}