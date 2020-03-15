import * as actionType from "../../Actions/ActionTypes";
import initialState from "../InitialState";

export default function SaveRolesPagesReducer(
  state = initialState.savedPagesRequest,
  action
) {
  switch (action.type) {
    case actionType.CREATE_PAGES_REQUEST_SUCCESS:
      return action.payload;
    case actionType.UPDATE_PAGES_REQUEST_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}