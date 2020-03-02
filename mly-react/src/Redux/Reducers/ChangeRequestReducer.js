import * as actionType from '../Actions/ActionTypes'
import initialState from '../InitialState'

export default function ChangeRequestReducer(state=initialState.currentRequest,action)
{
    switch (action.type) {
        case actionType.CHANGE_REQUEST:           
            return action.payload   
        default:
            return state;
    }
}