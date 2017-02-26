// Requirements
var express = require('express')
var app = express();
var bodyParser = require('body-parser');

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
