const Router = require("express").Router;

const router = Router();

const productController = require("../controllers/product-controller");

router.get("/:id", productController.getOne);

module.exports = router;
