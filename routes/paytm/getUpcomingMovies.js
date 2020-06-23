const axios = require("axios");

module.exports = async () => {
  try {
    let url = "https://apiproxy.paytm.com/v2/movies/upcoming";
    const response = await axios.get(url);

    return {
      success: true,
      data: response.data.upcomingMovieData,
    };
  } catch (err) {
    console.log(__filename, err);
    return {
      success: false,
      msg: "Something went wrong",
    };
  }
};
