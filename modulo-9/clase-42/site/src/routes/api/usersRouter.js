// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const usersController = require("../../controllers/api/usersController");

router.get("/count", usersController.count); /* GET - count */

module.exports = router;
