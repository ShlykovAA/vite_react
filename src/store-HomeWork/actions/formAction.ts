import { IFormItem } from "../types";

export const ADD_FORM = "ADD_FORM";

export const addForm = (form: IFormItem) => {
    return { type: ADD_FORM, payload: form };
};