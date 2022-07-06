import * as types from "./action-types";

export function target(state = '', action) {
  switch (action.type) {
    case types.GET_TARGET:
      return action.payload;
    default:
      return state;
  }
}


export function botConfig(state = {}, action) {
  switch (action.type) {
    case types.GET_BOT_CONFIG:
      return action.payload;
    default:
      return state;
  }
} 
