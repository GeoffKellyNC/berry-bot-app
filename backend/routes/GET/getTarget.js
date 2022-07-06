const express = require('express');
const router = express.Router();
const { target } = require('../../twitch/bot-config');


router.get("/", (req, res) => {   
    res.send(target);
    
  })

  module.exports = router;
