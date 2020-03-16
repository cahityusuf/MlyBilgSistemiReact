import * as actionType from "../../Actions/ActionTypes";
import initialState from "../InitialState";

export default function SaveUserReducer(
  state = initialState.savedUsers,
  action
) {
  switch (action.type) {
    case actionType.CREATE_USER_SUCCESS:
      return action.payload;
    case actionType.UPDATE_USER_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
