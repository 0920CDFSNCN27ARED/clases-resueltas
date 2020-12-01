const fs = require("fs");

function getProducts() {
  const dbJson = fs.readFileSync(__dirname + "/../db.json", {
    encoding: "utf-8",
  });
  return JSON.parse(dbJson);
}

function getOne(req, res) {
  const products = getProducts();
  const requiredProduct = products.find((prod) => {
    return prod.id == req.params.id;
  });
  if (requiredProduct == null) {
    return res
      .status(404)
      .send("404 not found. <br> ¡Houston, poseemos problemas!");
  }
  const toThousand = require("../utils/toThousand");

  res.render("product-detail", {
    product: requiredProduct,
    toThousand: toThousand,
  });
}

module.exports = {
  getOne: getOne,
};
