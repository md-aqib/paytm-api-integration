const DbMovies = require("../models/movie");

module.exports = async (req, res) => {
  try {
    const response = await DbMovies.find({}).sort({ releaseDate: -1 });
    if (response.length !== 0) {
      res.json({
        success: true,
        msg: "All upcoming movies",
        data: response,
      });
    } else {
      res.json({
        success: false,
        msg: "There is no data in db",
      });
    }
  } catch (err) {
    console.log(__filename, err);
    res.json({
      success: false,
      msg: "Something went wrong",
    });
  }
};
