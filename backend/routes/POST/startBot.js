const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const { berry } = require('../../twitch/berry');
const { modBerry } = require('../../twitch/modBerry');


const startBerry = () => {
    berry();
    modBerry();
  } 

const setBotState = async () => {
  const configLocation = path.join(__dirname, '../../twitch/bot-config.json')
  const data = await fs.readFileSync(configLocation, 'utf8');
  const config = await JSON.parse(data);
  const newData = {...config, botState: !config.botState.running};
  await fs.writeFileSync(configLocation, JSON.stringify(newData));

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