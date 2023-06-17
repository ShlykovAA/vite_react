export interface IAction<T> {
    type: string;
    payload: T;
}

export interface ITodoItem {
    id: string;
    content: string;
    completed: boolean;
}

export interface IProducts {
    loading: boolean;
    data: null | unknown;
    error: null | string;
}

export interface IStore {
    todo: ITodoItem[];
    theme: "dark" | "light";
    products: IProducts;
}