// Requirements
var express = require('express')
var app = express();
var bodyParser = require('body-parser');

// TEMPORARY - until I get models/index.js set up
var mongoose = require('mongoose');
mongoose.connect('mongob://localhost:3000');

var Anime = require('./models/anime');

var hunter = new Anime({
  title: "Hunter X Hunter",
  description: "Very exciting anime",
  total_episodes: 200,
  adult: false
});

hunter.save(function(err, newAnime){
  if (err) {return console.log(err);}
  console.log("saved new anime: ", newAnime);
});

// Data (temporary until I set up the database)

var anime = [
  'One Piece',
  'Hunter X Hunter',
  'Steins Gate'
]

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send("Hello, World!");
});

app.get("/api/anime", function (req, res) {
  res.json(anime);
});

// Server Start
app.listen(process.env.PORT || 3000, function () {
  console.log('App listening at http://localhost:3000/');
});
