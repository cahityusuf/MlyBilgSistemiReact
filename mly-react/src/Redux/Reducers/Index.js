import {combineReducers} from "redux"
import changePageReducer from "./ChangePageReducer"
import changeRequestReducer from "./ChangeRequestReducer"
import changeRolesReducer from "./ChangeRolesReducer"
import roleListReducer from "./RoleListReducer"
import pageListReducer from "./PageListReducer"
import requestListReducer from "./RequestListReducer"
import loginListReducer from "./LoginListReducer"

const rootReducer = combineReducers({
    changePageReducer,
    changeRequestReducer,
    changeRolesReducer,
    roleListReducer,
    pageListReducer,
    requestListReducer,
    loginListReducer

})

export default rootReducer;