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
            res.status === 200 ? console.log('Bot Started Successfully') : console.log('There was an error starting the bot: ', res)
        })
        .catch(err => {
            console.error(err);
        })
}

export const startVote = () => (dispatch) => {
    axios.post('http://localHost:9001/startVote', { data: 'startVote'})
        .then(res => {
            res.status === 200 ? console.log('Vote Started Successfully') : console.log('There was an error starting the vote: ', res)
        })
        .catch(err => console.error(err))
}

export const startMod = () => (dispatch) => {
    axios.post('http://localHost:9001/startMod', { data: 'startMod'})
        .then(res => {
            res.status === 200 ? console.log('Moderation Started Successfully') : console.log('There was an error starting Moderation: ', res)
        })
        .catch(err => console.error(err))
}

export const configureBerry = (botConfig) => (dispatch) => {
    axios.post('http://localHost:9001/postBotConfig', { botConfig })
        .then(res => {
            console.log('Bot Config Set')
        })
        .catch(err => {
            console.error(err);
        })
}