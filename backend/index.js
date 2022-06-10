require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');

const routerGetTarget = require('./routes/GET/getTarget');
const routerPostTarget = require('./routes/POST/postTarget');
const routerStartBot = require('./routes/POST/startBot');
const routerPostBotConfig = require('./routes/POST/postBotConfig');




//? ---- Server Port ----//
const PORT = process.env.PORT || 9001;

const app = express();

app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/getTarget', routerGetTarget);
app.use('/postTarget', routerPostTarget);
app.use('/startBot', routerStartBot);
app.use('/postBotConfig', routerPostBotConfig);


app.listen(PORT, () => {
  console.log(`Berry's Backend is running on ${PORT}......`);
});

