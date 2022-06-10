const express = require('express');
const router = express.Router();

const { berry } = require('../twitch/berry');


const startBerry = () => {
    berry();
  } 


router.post("/", (req, res) => {   // Start Berry
    console.log('Req: ', req.body);
    const { data } = req.body;
    if (data === 'startBot'){
      startBerry();
    }
    res.sendStatus(200);
  })

  module.exports = router;