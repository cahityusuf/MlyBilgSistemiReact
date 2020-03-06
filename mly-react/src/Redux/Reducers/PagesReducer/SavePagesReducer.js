import * as actionType from "../../Actions/ActionTypes";
import initialState from "../InitialState";

export default function SavePagesReducer(
  state = initialState.savedPages,
  action
) {
  switch (action.type) {
    case actionType.CREATE_PAGES_SUCCESS:
      return action.payload;
    case actionType.UPDATE_PAGES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}