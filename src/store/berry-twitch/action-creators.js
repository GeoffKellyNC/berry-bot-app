import axios from 'axios';
import * as types from './action-types';


export const setTarget = (target) => (dispatch) => {
    axios.post('http://localHost:9001/postTarget', { target })
        .then(res => {
            const target = res.data;
            dispatch({
                type: types.GET_TARGET,
                payload: target
            });
        })
        .catch(err => {
            console.error(err);
        })
}

export const startBerry = () => (dispatch) => {
    axios.post('http://localHost:9001/startBot', { data: 'startBot' })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err);
        })
}

export const configureBerry = (botConfig) => (dispatch) => {
    axios.post('http://localHost:9001/postBotConfig', { botConfig })
        .then(res => {
            const botConfig = res.data;
            dispatch({
                type: types.GET_BOT_CONFIG,
                payload: botConfig
            });
        })
        .catch(err => {
            console.error(err);
        })
}
