import { useAppSelector } from "../hooks"

export const useThemeSelector = () => {
    return useAppSelector((state) => state.theme);
}