import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function ListLoginReducer(state=initialState.token,action)
{
    switch (action.type) {
        
        case actionType.CREATE_LOGIN_SUCCESS:        
            return action.payload   
        default:
            return state;
    }
}