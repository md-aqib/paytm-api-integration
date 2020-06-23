const DbMovies = require("../models/movie");
const fetchData = require("./paytm/getUpcomingMovies");

module.exports = async (req, res) => {
  try {
    let upComingMovies = await fetchData();
    let array = [];
    for (i = 0; i < upComingMovies.data.length; i++) {
      let data = {
        title:
          upComingMovies.data[i].movieTitle ||
          upComingMovies.data[i].movie_name ||
          "",
        genre: upComingMovies.data[i].genre || "",
        language: upComingMovies.data[i].language || "",
        rank: upComingMovies.data[i].rank || "",
        paytmMovieCode: upComingMovies.data[i].paytmMovieCode || "",
        isContentAvailable: upComingMovies.data[i].isContentAvailable || "",
        contentId: upComingMovies.data[i].contentId,
        releaseDate: upComingMovies.data[i].releaseDate || "",
      };
      array.push(data);
    }

    const response = await DbMovies.insertMany(array);
    if (response) {
      res.json({
        success: true,
        msg: "Movies updated",
      });
    }
  } catch (err) {
    console.log(__filename, err);
    res.json({
      success: false,
      msg: "something went wrong",
    });
  }
};
