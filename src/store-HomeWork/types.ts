export interface IAction {
    type: string;
    payload: IFormItem;
}

export interface IFormItem {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IStore {
    form: IFormItem[];
}