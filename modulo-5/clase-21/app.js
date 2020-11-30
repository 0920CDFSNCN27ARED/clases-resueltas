const express = require("express");
const app = express();

app.use(express.static("public"));

// Configuracion de nuestro View Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.listen(3000, () => {});

function getProducts() {
  const dbJson = fs.readFileSync(__dirname + "/db.json", { encoding: "utf-8" });
  return JSON.parse(dbJson);
}

app.get("/", (req, res) => {
  const products = getProducts();

  res.render("index", { products: products });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

const fs = require("fs");

app.get("/products/:category/:id/details", (req, res) => {
  const products = getProducts();
  const requiredProduct = products.find((prod) => {
    return prod.id == req.params.id;
  });
  if (!requiredProduct) {
    res.status(404).send("404 not found. <br> ¡Houston, poseemos problemas!");
  }
  res.render("product-detail", { product: requiredProduct });
});
