const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movie = new Schema({
  title: String,
  genre: [String],
  language: String,
  rank: Number,
  paytmMovieCode: String,
  isContentAvailable: Number,
  contentId: Number,
  releaseDate: Date,
});

module.exports = mongoose.model("upcomingMovies", movie);
