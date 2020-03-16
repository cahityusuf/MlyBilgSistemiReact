import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function ListUserRolesReducer(state=initialState.userRoles,action)
{
    switch (action.type) {
       
        case actionType.GET_USER_ROLES_SUCCESS:           
            return action.payload   
        default:
            return state;
    }
}