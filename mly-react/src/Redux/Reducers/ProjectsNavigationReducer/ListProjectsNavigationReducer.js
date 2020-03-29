import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function ListProjectsNavigationDetailReducer(state=initialState.projectsNavigation,action)
{
    switch (action.type) {
        
        case actionType.GET_PROJECTS_NAVIGATION_SUCCESS:        
            return action.payload
        default:
            return state;
    }
}