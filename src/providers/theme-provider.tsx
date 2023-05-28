import React from "react";

interface IContext {
    theme: "dark" | "light";
    setTheme: (arg:"dark" | "light") => void;
}

export const lessonThemeContext = React.createContext<IContext>({theme: "dark", setTheme:()=>{}});

interface IThemeProvider {
    children: React.ReactNode; 
}

export const ThemeProvider = ({children} : IThemeProvider) => {
    const [theme, setTheme] = React.useState<"dark" | "light">("dark");
    return (
        <lessonThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </lessonThemeContext.Provider>
    )
};