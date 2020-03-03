import {createStore, applyMiddleware} from "redux"
import rootReducer from "./Index"
import thunk from "redux-thunk"

export default function ConfigureStore()
{
    return createStore(rootReducer, applyMiddleware(thunk))
}