import * as actionType from '../Actions/ActionTypes'
import initialState from './InitialState'

export default function LoginListReducer(state=initialState.login,action)
{
    switch (action.type) {
        case actionType.GET_LOGIN_SUCCESS:           
            return action.payload   
        default:
            return state;
    }
}