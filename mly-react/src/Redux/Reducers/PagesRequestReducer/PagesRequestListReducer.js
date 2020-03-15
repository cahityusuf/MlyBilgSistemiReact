import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function RolesPagesListReducer(state=initialState.pagesRequests,action)
{
    switch (action.type) {
        case actionType.GET_PAGES_REQUEST_SUCCESS:           
            return action.payload   
        default:
            return state;
    }
}