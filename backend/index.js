
   
const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');

const getTarget = require('./routes/getTarget');
const postTarget = require('./routes/postTarget');



//? ---- Server Port ----//
const PORT = process.env.PORT || 9001;

const app = express();

app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/getTarget', getTarget);
app.use('/postTarget', postTarget);

