import axios from 'axios';
import * as types from './action-types';

const botConfigEP = process.env.REACT_APP_BOT_CONFIG_EP;

export const getTarget = () => (dispatch) => {
    axios.get(`${botConfigEP}`)
        .then(res => {
            const target = res.data[0].target
            dispatch({type: types.GET_TARGET, payload: target })
            return target
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


export const configureBerry = (botConfig) => async (dispatch) => {
    try{
        const getRes = await axios.get(botConfigEP)
        const configData = getRes.data[0]
        const newBotConfig = {...configData, ...botConfig}
        const postRes = await axios.patch(`${botConfigEP}/1`, newBotConfig)

        dispatch({type: types.GET_BOT_CONFIG, payload: newBotConfig})

    }catch(err){
        console.log(err)
    }

}


export const pingBerry = () => async (dispatch) => {
    try{
        const res = await axios.post('http://localHost:9001/pingBerry', { data: 'ping' })
        console.log('Ping Res: ', res)
        res.status === 200 ? dispatch({ type: types.GET_BOT_STATUS, payload: { running: true} }): dispatch({ type: types.GET_BOT_STATUS, payload: { running: false} })
    }catch(err){
        console.log('Error in pingBerry: ', err)
    }
    
}