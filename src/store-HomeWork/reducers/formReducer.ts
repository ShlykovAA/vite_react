import { ADD_FORM } from "../actions/formAction";
import { IAction, IStore } from "../types";

export const formReducer = ( state: IStore["form"] = [], action: IAction ) => {
    switch (action.type) {
        case ADD_FORM:
            return [ ...state, action.payload ];
        default:
            return state;
    }
}