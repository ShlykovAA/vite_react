import { useDispatch } from "react-redux";
import { useThemeSelector } from "../../store/selectors/themeSelectors"
import { changeAction } from "../../store/action/themeActions";

export const ThemeChanger = () => {
    const theme = useThemeSelector();
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(changeAction(theme === "dark" ? "light" : "dark"))
    }

    return (
        <div>
            <button onClick={onClick}>Change Theme</button>
            <p>{theme}</p>
        </div>
    )
}