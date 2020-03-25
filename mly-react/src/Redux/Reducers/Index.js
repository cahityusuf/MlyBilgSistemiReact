import {combineReducers} from "redux"
import changePageReducer from "./PagesReducer/ChangePageReducer"
import changeRequestReducer from "./RequestsReducer/ChangeRequestReducer"
import changeRolesReducer from "./RolesReducer/ChangeRolesReducer"
import roleListReducer from "./RolesReducer/RoleListReducer"
import pageListReducer from "./PagesReducer/PageListReducer"
import requestListReducer from "./RequestsReducer/RequestListReducer"
import listLoginReducer from "./LoginReducer/ListLoginReducer"
import rolesPagesListReducer from "./RolesPagesReducer/RolesPagesListReducer"
import saveRoleReducer from "./RolesReducer/SaveRoleReducer"
import savePagesReducer from "./PagesReducer/SavePagesReducer"
import saveRequestReducer from "./RequestsReducer/SaveRequestReducer"
import saveRolesPagesReducer from "./RolesPagesReducer/SaveRolesPagesReducer"
import pagesRequestListReducer from "./PagesRequestReducer/PagesRequestListReducer"
import pagesRequestSaveReducer from "./PagesRequestReducer/PagesRequestSaveReducer"
import chanceUserRolesReducer from "./UserRolesReducer/ChangeUserRolesReducer"
import listUserRolesReducer from "./UserRolesReducer/ListUserRolesReducer"
import saveUserRolesReducer from "./UserRolesReducer/SaveUserRolesReducer"
import chanceUserReducer from "./UserReducer/ChangeUserReducer"
import listUserReducer from "./UserReducer/UserListReducer"
import saveUserReducer from "./UserReducer/SaveUserReducer"
import listRequestTypeReducer from "./RequestTypeReducer/ListRequestTypeReducer"
import saveRequestTypeReducer from "./RequestTypeReducer/SaveRequestTypeReducer"
//import authReducer from "./LoginReducer/AuthReducer"
import errorReducer from "./ErrorReducer/ErrorReducer"
import tokenReducer from "./LoginReducer/TokenReducer"
import changeRolesPagesReducer from "./RolesPagesReducer/ChangeRolesPagesReducer"
import navigationTitlesReducer from "./NavigationTitlesReducer/ListNavigationTitlesReducer"
import listNaviRolesPagesReduce from "./RolesPagesReducer/ListNaviRolesPagesReducer"


const rootReducer = combineReducers({
    changePageReducer,
    changeRequestReducer,
    changeRolesReducer,
    roleListReducer,
    pageListReducer,
    requestListReducer,
    listLoginReducer,
    rolesPagesListReducer,
    saveRoleReducer,
    savePagesReducer,
    saveRequestReducer,
    saveRolesPagesReducer,
    pagesRequestListReducer,
    pagesRequestSaveReducer,
    chanceUserRolesReducer,
    listUserRolesReducer,
    saveUserRolesReducer,
    chanceUserReducer,
    listUserReducer,
    saveUserReducer,
    listRequestTypeReducer,
    saveRequestTypeReducer,
    errorReducer,
    tokenReducer,
    changeRolesPagesReducer,
    navigationTitlesReducer,
    listNaviRolesPagesReduce
})

export default rootReducer;