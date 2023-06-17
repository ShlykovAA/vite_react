export interface IAction<T> {
    type: string;
    payload: T;
}

interface ITodoItem {
    id: number;
    
}

export interface IStore {
    todo: string[];
    theme: "dark" | "light";
}