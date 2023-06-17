import { Dispatch } from "redux";
import { IAction, IProducts } from "../types";

export const PRODUCTS_LOADING = "PRODUCTS_LOADING";
export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_ERROR = "PRODUCTS_ERROR";

const productsLoading = (): Omit<IAction<null>, "payload"> => ({type: PRODUCTS_LOADING})

const productsLoadSuccessful = (products: unknown): IAction<unknown> => ({type: PRODUCTS_SUCCESS, payload: products})

const productsLoadFailed = (error: unknown): IAction<unknown> => ({type: PRODUCTS_ERROR, payload: error})

export const fetchProducts = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(productsLoading());
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((products) => dispatch(productsLoadSuccessful(products)))
            .catch((error) => dispatch(productsLoadFailed(error)))
    }
}