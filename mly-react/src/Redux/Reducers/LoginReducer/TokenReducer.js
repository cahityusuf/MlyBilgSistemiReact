
import * as actionType from "../../Actions/ActionTypes";
//import initialState from "../InitialState";

const initialState = {
    
        token: [],
        expiration:[],
        tokenDate: [],
        tokenHour: [],
        isLogin: false
     
}

export default function ListLoginReducer(
    state=initialState,
//   state = initialState.tokenSuccess,
  action
) {
  switch (action.type) {
    case actionType.CREATE_TOKEN_SUCCESS:
      return action.payload;
    case actionType.LOGIN_FAIL:
      return action.payload;
    default:
      return state;
  }
}


