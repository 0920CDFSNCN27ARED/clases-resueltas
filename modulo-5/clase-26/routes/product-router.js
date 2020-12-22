const Router = require("express").Router;

const router = Router();

const multer = require("multer");
const upload = multer({ dest: "public/images/" });

const assertSignedIn = require("../middlewares/auth/assert-signed-in");
const assertIsAdmin = require("../middlewares/auth/assert-is-admin");

const productController = require("../controllers/product-controller");
//> /products
router.get("/", productController.getAll);
router.get("/create", productController.showCreate);
router.post("/", upload.single("image"), productController.create);

router.get("/:id", assertSignedIn, productController.getOne);
router.get(
    "/:id/edit",
    assertSignedIn,
    assertIsAdmin,
    productController.showEdit
);
router.put("/:id", upload.single("image"), productController.edit);

router.delete("/:id", productController.delete);

module.exports = router;
