import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function ChangeUserReducer(state=initialState.currentUser,action)
{
    switch (action.type) {
        case actionType.CHANGE_USERS:              
            return action.payload   
        default:
            
            return state;
    }
}