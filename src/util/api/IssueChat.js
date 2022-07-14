import axios from 'axios'

export const issueMessage = async (message) => {
    const res = await axios.post('http://localhost:3000/api/postMessage', message)
    return res.data
}