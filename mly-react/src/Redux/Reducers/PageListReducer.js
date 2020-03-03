import * as actionType from '../Actions/ActionTypes'
import initialState from './InitialState'

export default function PageListReducer(state=initialState.pages,action)
{
    switch (action.type) {
        case actionType.GET_PAGES_SUCCESS:           
            return action.payload   
        default:
            return state;
    }
}