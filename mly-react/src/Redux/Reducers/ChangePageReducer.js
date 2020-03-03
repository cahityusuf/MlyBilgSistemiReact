import * as actionType from '../Actions/ActionTypes'
import initialState from './InitialState'

export default function ChangePageReducer(state=initialState.currentPage,action)
{
    switch (action.type) {
        case actionType.CHANGE_PAGES:           
            return action.payload   
        default:
            return state;
    }
}