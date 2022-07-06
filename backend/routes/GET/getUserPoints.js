const express = require('express')
const router = express.Router();
const pointsData = require('../../data/moderation/points.json')
const axios = require('axios')

const pointEndpoint = process.env.USER_POINTS_ENDPOINT


const getUserPoints = async () => {
    const response = await axios.get(pointEndpoint)
    const data = response.data
    return data
}





router.get("/", async (req,res) => {
    const pointsData = await getUserPoints()
    res.send(pointsData)
})


module.exports = router;