import React from "react";
import {lessonThemeContext} from "../../providers/theme-provider"

export const ThemeButton = () => {
    const themeContext = React.useContext(lessonThemeContext);
    return (
        <>
        <p>Current theme: {themeContext.theme}</p>
        <button onClick={()=>{
            themeContext.setTheme(themeContext.theme==="dark" ? "light" : "dark")
        }}>Chenge theme</button>
        </>
    )
};