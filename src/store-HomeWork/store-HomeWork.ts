import { combineReducers, compose, createStore } from "redux";
import { formReducer } from "./reducers/formReducer";

const rootReducerHomeWork = combineReducers({ form: formReducer });

export const storeHomeWork = createStore(
    rootReducerHomeWork,
    {},
    compose(
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);