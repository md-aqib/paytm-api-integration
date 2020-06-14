const express = require("express");
const router = express.Router();

router.post("/saveData", require("./saveData"));

module.exports = router;
