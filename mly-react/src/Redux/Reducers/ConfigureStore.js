import {compose,createStore, applyMiddleware} from "redux"
import rootReducer from "./Index"
import thunk from "redux-thunk"

export default function ConfigureStore()
{
    const allEnhancers = compose( //Adım 3
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return createStore(rootReducer, allEnhancers)
}