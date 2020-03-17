import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function SaveRequestTypeReducer(state=initialState.savedRequestType,action)
{
    switch (action.type) {
        case actionType.CREATE_REQUEST_TYPE_SUCCESS:
          return action.payload;
        case actionType.UPDATE_REQUEST_TYPE_SUCCESS:
          return action.payload;
    
        default:
          return state;
      }
}