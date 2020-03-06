import * as actionType from "../../Actions/ActionTypes";
import initialState from "../InitialState";

export default function SaveRolesPagesReducer(
  state = initialState.savedRole,
  action
) {
  switch (action.type) {
    case actionType.CREATE_ROLES_PAGES_SUCCESS:
      return action.payload;
    case actionType.UPDATE_ROLES_PAGES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}