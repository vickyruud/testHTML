const express = require('express');
const app = express()
const PORT = 5000;
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));// activating body parser for POST requests

app.set("view engine", "ejs");

const songs = {
  1000 : {
    id : 1000,
    name: "Time",
    Artist : "Hans Zimmer"
  },
  2000 : {
    id : 2000,
    name: "Ezio's Family",
    Artist : "Jesper Kyd"
  },
};

app.get("/", (req, res) => {
  res.send(songs);
});

app.get("/songs", (req, res) => {
  res.render("songs_index");
});


app.listen(PORT, () => console.log("Awaiting connection on: ", PORT));