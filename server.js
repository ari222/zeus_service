const express = require("express");
const async = require("async");
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

//add support for cors
app.use(cors());
// support json encoded bodies
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//plugin router into the pipeline
app.use(routes);

//   ********* SHOULD BE UNCOMMENTED TO RUN LOCALLY  *********
// app.listen(8080, () => {
//   console.log('listening ...');
// });
module.exports = app;