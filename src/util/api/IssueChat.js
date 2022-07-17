import axios from 'axios'


const URL = 'https://berry-bot-backend-heroku.herokuapp.com'

export const issueMessage = async (message) => {
    const res = await axios.post(`${URL}/postMessage`, message)
    return res.data
}