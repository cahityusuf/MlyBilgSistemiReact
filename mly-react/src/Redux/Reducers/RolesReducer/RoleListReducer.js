import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function RoleListReducer(state=initialState.roles,action)
{
    switch (action.type) {
        case actionType.GET_ROLES_SUCCESS:           
            return action.payload   
        default:
            return state;
    }
}