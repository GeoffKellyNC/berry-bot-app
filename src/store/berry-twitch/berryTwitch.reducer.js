import * as types from "./action-types";

export function target(state = '', action) {
  switch (action.type) {
    case types.GET_TARGET:
      return action.payload;
    default:
      return state;
  }
}

const initialBotConfig = {
  accessToken: "",
  clientId: "",
  clientSecret: "",
  refreshToken: "",
  tokenType: "",
  expiresIn: "",
}

export function botConfig(state = initialBotConfig, action) {
  switch (action.type) {
    case types.GET_BOT_CONFIG:
      return action.payload;
    default:
      return state;
  }
}
