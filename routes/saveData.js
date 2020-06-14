const DbMovies = require("../models/movie");
const fetchData = require("./paytm/getUpcomingMovies");

module.exports = async (req, res) => {
  let upComingMovies = await fetchData();
  console.log(upComingMovies.data);
  for (i = 0; i < upComingMovies.data.length; i++) {}
};
