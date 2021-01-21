const express = require("express");
const router = express.Router();

const genreController = require("../controllers/genres");

router.get("/", genreController.index);
router.get("/:id", genreController.detail);

module.exports = router;
