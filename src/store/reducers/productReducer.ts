import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IStore } from "../types";

const initialState: IStore["products"] = {
    products: { loading: false, data: null, error: null, },
    product: { loading: false, data: null, error: null, },
}

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    const resp = await fetch('https://dummyjson.com/products');
    const data = await resp.json();
    return data;
})

export const fetchProduct = createAsyncThunk<any, number>("product/fetch", async (id) => {
    const resp = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await resp.json();
    return data;
})

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.products.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products.loading = false;
                state.products.data = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.products.loading = false;
                state.products.error = action.error;
            })
            .addCase(fetchProduct.pending, (state) => {
                state.product.loading = true
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.product.loading = false;
                state.product.data = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.product.loading = false;
                state.product.error = action.error;
            })
    },
});

export const productReducer = productsSlice.reducer;