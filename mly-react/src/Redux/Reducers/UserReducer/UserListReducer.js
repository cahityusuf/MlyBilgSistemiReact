import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function UserListReducer(state=initialState.users,action)
{
    switch (action.type) {
       
        case actionType.GET_USER_SUCCESS:           
            return action.payload   
        default:
            return state;
    }
}