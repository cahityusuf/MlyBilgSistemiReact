import * as actionType from "../../Actions/ActionTypes";
import initialState from "../InitialState";

export default function SaveUserRolesReducer(
  state = initialState.savedUserRoles,
  action
) {
  switch (action.type) {
    case actionType.CREATE_USER_ROLES_SUCCESS:
      return action.payload;
    case actionType.UPDATE_USER_ROLES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
