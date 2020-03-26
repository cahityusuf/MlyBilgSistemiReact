import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function ListNavigationTitlesReducer(state=initialState.navigationTitleDetail,action)
{
    switch (action.type) {
        
        case actionType.GET_NAVIGATION_TITLES_DETAIL_SUCCESS:        
            return action.payload
        default:
            return state;
    }
}