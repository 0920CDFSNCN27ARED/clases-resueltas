// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const productsController = require("../../controllers/api/productsController");

router.get("/latest", productsController.latest); /* GET - latest */
router.get("/offers", productsController.offers); /* GET - offers */
router.get(
    "/by-category",
    productsController.filterByCategory
); /* GET - by-category */
router.get("/gifyRandom", productsController.gifyRandom);

router.get("/count", productsController.count);
router.get("/total-price", productsController.totalPrice);

module.exports = router;
