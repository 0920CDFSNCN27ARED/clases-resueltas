const express = require("express");
const app = express();

app.use(express.static("public"));

// Configuracion de nuestro View Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.listen(3000, () => {});

app.get("/", (req, res) => {
  const products = getProducts();
  res.render("index", { products: products });
});

const productRouter = require("./routes/product-router");
app.use("/products", productRouter);

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});
