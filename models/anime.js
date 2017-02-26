var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AnimeSchema = new Schema({
  title: String,
  description: String,
  total_episodes: Number,
  adult: Boolean
});

var Anime = mongoose.model('Anime', AnimeSchema);

module.exports = Anime;
