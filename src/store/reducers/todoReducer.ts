import { ADD_TODO } from "../action/action";
import { IStore, IAction } from "../types";

export const todoReducer = (state: IStore["todo"] = [], action: IAction<string>) => {
    console.log("state", state);
    console.log("action", action);

    switch (action.type) {
        case ADD_TODO: 
            return [ ...state, action.payload ];
        default:
            return state;
    }   
};