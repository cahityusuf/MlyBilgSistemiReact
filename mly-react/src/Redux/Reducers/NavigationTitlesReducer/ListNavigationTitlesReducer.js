import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function ListNavigationTitlesReducer(state=initialState.navigationTitle,action)
{
    switch (action.type) {
        
        case actionType.GET_NAVIGATION_TITLES_SUCCESS:        
            return action.payload   
        default:
            return state;
    }
}