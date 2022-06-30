import axios from 'axios';


export async function getBotConfig () {
    try {
        const res = await axios.get('http://localhost:9001/botConfig');
        return res.data;
    } catch (err) {
        console.error(err);
    }
}

