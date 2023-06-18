import { createSlice } from "@reduxjs/toolkit"
import { IStore } from "../types";
// import { CHANGE_THEME } from "../action/themeActions";
// import { IStore, IAction } from "../types";

// export const themeReducer = (
//     state: IStore["theme"] = "dark",
//     action: IAction<IStore["theme"]>
// ) => {
//     switch(action.type) {
//         case CHANGE_THEME:
//             return action.payload;
//         default:
//             return state;
//     }
// }

const initialState: IStore["theme"] = "dark"

const themeSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: { 
        changeTheme: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})

export const { changeTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer