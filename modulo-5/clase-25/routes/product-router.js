const Router = require("express").Router;

const router = Router();

const multer = require("multer");
const upload = multer({ dest: "public/images/" });

const productController = require("../controllers/product-controller");
//> /products
router.get("/", productController.getAll);
router.get("/create", productController.showCreate);
router.post("/", upload.single("image"), productController.create);

router.get("/:id", productController.getOne);
router.get("/:id/edit", productController.showEdit);
router.put("/:id", upload.single("image"), productController.edit);

router.delete("/:id", productController.delete);

module.exports = router;
