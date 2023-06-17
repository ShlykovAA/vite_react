import { CHANGE_THEME } from "../action/themeActions";
import { IStore, IAction } from "../types";

export const themeReducer = (
    state: IStore["theme"] = "dark",
    action: IAction<IStore["theme"]>
) => {
    switch(action.type) {
        case CHANGE_THEME:
            return action.payload;
        default:
            return state;
    }
}