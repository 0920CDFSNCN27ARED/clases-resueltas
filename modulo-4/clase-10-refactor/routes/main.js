const { Router } = require("express");
const mainController = require("../controllers/main");

const router = Router();

router.get("/", mainController.home);

router.get("/creditos", mainController.credits);

module.exports = router;
