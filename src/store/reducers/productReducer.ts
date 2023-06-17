import { PRODUCTS_LOADING, PRODUCTS_SUCCESS, PRODUCTS_ERROR } from "../action/productsAction"
import { IStore, IAction } from "../types";

const initialState: IStore["products"] = {
    loading: false,
    data: null,
    error: null,
}

const productsLoading = (state: IStore["products"]): IStore["products"]  => ({...state, loading: true})

const productsLoadSuccessful = (
    state: IStore["products"],
    action: IAction<unknown>
): IStore["products"] => ({
    ...state,
    loading: false,
    data: action.payload
})

const productsLoadFailed = (
    state: IStore["products"],
    action: IAction<string>
): IStore["products"] => ({
    ...state,
    loading: false,
    error: action.payload,
})

export const productReducer = (
    state: IStore["products"] = initialState,
    action: IAction<any>
) => {
    switch(action.type) {
        case PRODUCTS_LOADING:
            return productsLoading(state)
        case PRODUCTS_SUCCESS:
            return productsLoadSuccessful(state, action)
        case PRODUCTS_ERROR:
            return productsLoadFailed(state, action)
        default:
            return state;
    }
}