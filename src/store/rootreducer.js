import { combineReducers } from "redux";
import { target } from './berry-twitch/berryTwitch.reducer'
import { botConfig } from './berry-twitch/berryTwitch.reducer'

export default combineReducers({
    target,
    botConfig
});