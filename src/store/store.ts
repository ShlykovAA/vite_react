import { themeReducer } from "./reducers/themeReducer";
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todoReducer";
import { productReducer } from "./reducers/productReducer"

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        theme: themeReducer,
        products: productReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;