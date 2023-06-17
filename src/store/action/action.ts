export const ADD_TODO = "ADD_TODO";

export const addTodo = (todo: string) => {
    return {type: ADD_TODO, payload: todo}
}