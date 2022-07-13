import { combineReducers } from "redux";
import { target } from './berry-twitch/berryTwitch.reducer'
import { botConfig } from './berry-twitch/berryTwitch.reducer'
import { pointsData } from './berry-points/berry-points.reducer'
import { botStatus } from './berry-twitch/berryTwitch.reducer'

export default combineReducers({
    target,
    botConfig,
    pointsData,
    botStatus
});