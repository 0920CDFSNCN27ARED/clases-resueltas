const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/movies");

router.get("/", moviesController.index);
router.get("/:id", moviesController.detail);

module.exports = router;
