const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const { berry } = require('../../twitch/berry');


const startBerry = () => {
    berry();
  } 

const setBotState = async () => {
    const configLocation = path.join(__dirname, 'bot-config.json')
    const configData = JSON.parse(await fs.readFile(configLocation, 'utf-8'))
    configData.botState.running = !configData.botState.running
    await fs.writeFile(configLocation, JSON.stringify(configData, null, 4, 'UTF-8'))
}




router.post("/", (req, res) => {   // Start Berry
    const { data } = req.body;
    if (data === 'startBot'){
      startBerry();
      setBotState();
    }
    res.sendStatus(200);
  })

  module.exports = router;