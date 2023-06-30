import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPosts } from "../types";
import { useAppSelector } from "../hooks";

const initialState: IPosts<any, any> = {
    data: null,
    loading: false,
    error: null,
}

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    const data = await response.json();
    if (!response.ok) {
        throw "my Error";
      }
    return data;
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
    },
})

export const postsReducer = postsSlice.reducer;

export const usePostsSelector = () => {
    return useAppSelector((state) => state.posts);
}