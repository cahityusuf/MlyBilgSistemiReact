import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function ChangeUserRolesReducer(state=initialState.currentUserRoles,action)
{
    switch (action.type) {
        case actionType.CHANGE_USER_ROLES:              
            return action.payload   
        default:
            
            return state;
    }
}