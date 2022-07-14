import axios from 'axios'

const modEP = process.env.REACT_APP_BERRY_MOD_EP;


export const postNewWord = async (word) => {
    try {
        console.log('Posting new word: ', word)
        const getRes = await axios.get(modEP)
        const array = getRes.data[0].bannedWords
        const newArray = [...array, word]
        console.log('New Array: ', newArray)
        const postRes = await axios.patch(`${modEP}/1`, {
            bannedWords: newArray
        })
        console.log('Post Response: ', postRes)
        return postRes.data
    }catch(err){
        console.log('error in postNewWord', err)
    }
}