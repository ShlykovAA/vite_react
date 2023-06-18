import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IComments } from "../types";
import { useAppSelector } from "../hooks";

const initialState: IComments[] = []

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<IComments>) => {
            console.log("action comm",action)
            return [ ...state, action.payload ]
        }
    }
})

export const { addComment } = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;

export const useCommentsSelector = () => {
    const comments = useAppSelector((state) => state.comments);
    return comments;
}