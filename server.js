const express = require('express');
const app = express()
const PORT = 5000;
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));// activating body parser for POST requests

app.get("/", (res, req) => {
  res.setEncoding("You have connected!!");
})

app.listen(PORT, () => console.log("Awaiting connection on: ", PORT));