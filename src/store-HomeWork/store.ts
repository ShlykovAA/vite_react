import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slice/posts";
import { commentsReducer } from "./slice/comments";

export const storeHomeWork = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof storeHomeWork.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof storeHomeWork.dispatch;