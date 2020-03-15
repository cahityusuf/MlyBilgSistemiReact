import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function RequestListReducer(state=initialState.requests,action)
{
    switch (action.type) {
        case actionType.GET_REQUEST_SUCCESS:           
            return action.payload   
        default:
            return state;
    }
}