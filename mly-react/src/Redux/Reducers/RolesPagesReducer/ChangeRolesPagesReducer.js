import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function ChangeRolesPagesReducer(state=initialState.currentRolesPages,action)
{
    switch (action.type) {
        case actionType.CHANGE_ROLES_PAGES:           
            return action.payload   
        default:
            return state;
    }
}