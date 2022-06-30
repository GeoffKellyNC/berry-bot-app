const express = require('express')
const router = express.Router();
const pointsData = require('../../data/moderation/points.json')



router.get("/", (req,res) => {
    res.send(pointsData)


})


module.exports = router;