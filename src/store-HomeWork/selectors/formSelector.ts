import { useSelector } from "react-redux"
import { IStore } from "../types";

export const useFormSelector = () => {
    const form = useSelector((state: IStore) => {
        return state.form
    });
    return form;
}