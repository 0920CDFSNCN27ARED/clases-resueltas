const Router = require("express").Router;

const router = Router();

const productController = require("../controllers/product-controller");
//> /products
router.get("/", productController.getAll);
router.get("/create", productController.showCreate);
router.post("/", productController.create);

router.get("/:id", productController.getOne);
router.get("/:id/edit", productController.showEdit);
router.put("/:id", productController.edit);

router.delete("/:id", productController.delete);

module.exports = router;
