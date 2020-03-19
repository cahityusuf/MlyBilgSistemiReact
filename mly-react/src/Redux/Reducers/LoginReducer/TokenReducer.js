import * as actionType from '../../Actions/ActionTypes'
import initialState from '../InitialState'

export default function ListLoginReducer(state=initialState.tokenSuccess,action)
{
    switch (action.type) {
        
        case actionType.CREATE_TOKEN_SUCCESS:
            const payload={
                ...state,
                ...action.payload,
                token:action.payload.token,
                expiration: action.payload.expiration,
                tokenDate: action.payload.tokenDate,
                tokenHour: action.payload.tokenHour,
                isLogin: action.payload.isAuthenticated,   
        
            };         
             //console.log(payload)
            return payload  
        case actionType.LOGIN_FAIL:
            return action.payload;
        default:
            return state;
    }
}

