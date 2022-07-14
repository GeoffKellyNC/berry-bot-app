import axios from 'axios'

export const issueMessage = async (message) => {
    const res = await axios.post('https://berry-bot-backend-heroku.herokuapp.com/postMessage', message)
    return res.data
}