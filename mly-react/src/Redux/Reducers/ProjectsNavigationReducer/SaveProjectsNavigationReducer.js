import * as actionType from "../../Actions/ActionTypes";
import initialState from "../InitialState";

export default function SavePagesReducer(
  state = initialState.savedProjectsNavigation,
  action
) {
  switch (action.type) {
    case actionType.CREATE_PROJECTS_NAVIGATION_SUCCESS:
      return action.payload;
    case actionType.UPDATE_PROJECTS_NAVIGATION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}