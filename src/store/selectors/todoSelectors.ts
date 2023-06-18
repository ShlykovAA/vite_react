import { useAppSelector } from "../hooks";

export const useTodoSelector = () => {
    const todo = useAppSelector((state) => state.todo);
    return todo;
}