import {combineReducers} from "redux"
import changePageReducer from "./PagesReducer/ChangePageReducer"
import changeRequestReducer from "./RequestsReducer/ChangeRequestReducer"
import changeRolesReducer from "./RolesReducer/ChangeRolesReducer"
import roleListReducer from "./RolesReducer/RoleListReducer"
import pageListReducer from "./PagesReducer/PageListReducer"
import requestListReducer from "./RequestsReducer/RequestListReducer"
import loginListReducer from "./LoginListReducer"
import rolesPagesListReducer from "./RolesPagesReducer/RolesPagesListReducer"
import saveRoleReducer from "./RolesReducer/SaveRoleReducer"
import savePagesReducer from "./PagesReducer/SavePagesReducer"
import saveRequestReducer from "./RequestsReducer/SaveRequestReducer"
import saveRolesPagesReducer from "./RolesPagesReducer/SaveRolesPagesReducer"
import pagesRequestListReducer from "./PagesRequestReducer/PagesRequestListReducer"
import pagesRequestSaveReducer from "./PagesRequestReducer/PagesRequestSaveReducer"

const rootReducer = combineReducers({
    changePageReducer,
    changeRequestReducer,
    changeRolesReducer,
    roleListReducer,
    pageListReducer,
    requestListReducer,
    loginListReducer,
    rolesPagesListReducer,
    saveRoleReducer,
    savePagesReducer,
    saveRequestReducer,
    saveRolesPagesReducer,
    pagesRequestListReducer,
    pagesRequestSaveReducer

})

export default rootReducer;