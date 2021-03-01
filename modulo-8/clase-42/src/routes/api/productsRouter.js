// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const productsController = require("../../controllers/api/productsController");

router.get("/latest", productsController.latest); /* GET - latest */
router.get("/offers", productsController.offers); /* GET - offers */

module.exports = router;
