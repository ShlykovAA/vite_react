import { useAppDispatch } from "../../store/hooks";
import { useThemeSelector } from "../../store/selectors/themeSelectors"
import { changeTheme } from "../../store/reducers/themeReducer";

export const ThemeChanger = () => {
    const theme = useThemeSelector();
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(changeTheme(theme === "dark" ? "light" : "dark"))
    }

    return (
        <div>
            <button onClick={onClick}>Change Theme</button>
            <p>{theme}</p>
        </div>
    )
}