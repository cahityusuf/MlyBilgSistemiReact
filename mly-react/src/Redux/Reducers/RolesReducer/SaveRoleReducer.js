import * as actionType from "../../Actions/ActionTypes";
import initialState from "../InitialState";

export default function SaveRolesReducer(
  state = initialState.savedRole,
  action
) {
  switch (action.type) {
    case actionType.CREATE_ROLES_SUCCESS:
      return action.payload;
    case actionType.UPDATE_ROLES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
