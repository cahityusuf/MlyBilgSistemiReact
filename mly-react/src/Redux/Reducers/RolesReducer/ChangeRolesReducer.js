import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function ChangeRolesReducer(state=initialState.currentRole,action)
{
    switch (action.type) {
        case actionType.CHANGE_ROLES:              
            return action.payload   
        default:
            
            return state;
    }
}