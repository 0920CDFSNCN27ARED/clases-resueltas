const express = require("express");
const router = express.Router();

const genreController = require("../controllers/genres");

router.get("/", genreController.index);
router.post("/", genreController.create);
router.get("/create", genreController.showCreate);

router.patch("/:id", genreController.update);
router.delete("/:id", genreController.delete);
router.get("/:id/edit", genreController.showEdit);
router.get("/:id", genreController.detail);

module.exports = router;
