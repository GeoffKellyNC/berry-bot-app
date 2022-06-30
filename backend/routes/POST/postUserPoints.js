const express = require('express');
const router = express.Router();
const pointsData = require('../../data/moderation/points.json')
const fs = require('fs')
const path = require('path')






router.post('/', (res, req) => {
    const { data } = res
    handleRes(data)

    req.send(200)
})

module.exports = router;