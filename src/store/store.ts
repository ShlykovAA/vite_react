import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { todoReducer } from "./reducers/todoReducer";
import { themeReducer } from "./reducers/themeReducer";
import { productReducer } from "./reducers/productReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    theme: themeReducer,
    products: productReducer,
 });

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)