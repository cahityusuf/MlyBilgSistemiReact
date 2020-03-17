import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function ListRequestTypeReducer(state=initialState.requestType,action)
{
    switch (action.type) {
        case actionType.GET_REQUEST_TYPE_SUCCESS:           
            return action.payload   
        default:
            return state;
    }
}