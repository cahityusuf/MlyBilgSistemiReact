import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function ListNaviRolesPagesReducer(state=initialState.naviRolesPages,action)
{
    switch (action.type) {
        case actionType.GET_NAVI_ROLES_PAGES_SUCCESS:           
            return action.payload   
        default:
            return state;
    }
}