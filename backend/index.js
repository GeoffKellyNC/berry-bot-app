require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');

const routerGetTarget = require('./routes/GET/getTarget');
const routerPostTarget = require('./routes/POST/postTarget');
const routerStartBot = require('./routes/POST/startBot');
const routerPostBotConfig = require('./routes/POST/postBotConfig');
const routerGetBotConfig = require('./routes/GET/getBotConfig');
const routerStartVote = require('./routes/POST/startVote')
const routerGetUserPoints = require('./routes/GET/getUserPoints')




//? ---- Server Port ----//
const PORT = process.env.PORT || 9001;

const app = express();

app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


// GET 
app.use('/getTarget', routerGetTarget); // route to get target
app.use('/botConfig', routerGetBotConfig); // route to retrieve bot config data
app.use('/userPoints', routerGetUserPoints); // route to retrieve user points


// POST 
app.use('/postTarget', routerPostTarget); // set target in bot config
app.use('/startBot', routerStartBot); // route to the start bot function
app.use('/postBotConfig', routerPostBotConfig); // route used to set bot config
app.use('/startVote', routerStartVote) // route used to start voting


app.listen(PORT, () => {
  console.log(`Berry's Backend is running on ${PORT}......`);
});

