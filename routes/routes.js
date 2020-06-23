const express = require("express");
const router = express.Router();

router.post("/saveData", require("./saveData"));
router.get("/getUpMovies", require("./getMoviesFromDB"));

module.exports = router;
