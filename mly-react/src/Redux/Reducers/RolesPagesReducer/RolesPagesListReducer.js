import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function RolesPagesListReducer(state=initialState.rolesPages,action)
{
    switch (action.type) {
        case actionType.GET_ROLES_PAGES_SUCCESS:           
            return action.payload   
        default:
            return state;
    }
}