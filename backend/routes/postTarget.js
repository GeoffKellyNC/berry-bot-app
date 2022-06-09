const express = require('express');
const router = express.Router();

const sendTargetToConfig = (target) => {
    const { target: targetConfig } = require('../twitch/bot-config');
    targetConfig.target = target;
}

router.post("/", (req, res) => {   
    console.log('Req: ', req.body);
    const { target } = req.body;
    sendTargetToConfig(target);
    res.send(target);
  })

  module.exports = router;