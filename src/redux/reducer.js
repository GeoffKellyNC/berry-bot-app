import { combineReducers } from "redux";
import * as types from "./action-types";

function target(state = '', action) {
  switch (action.type) {
    case types.GET_TARGET:
      return state + 1;
    default:
      return state;
  }
}

export default combineReducers({ 
  target
});
