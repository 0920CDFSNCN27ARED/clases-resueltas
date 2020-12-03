const express = require("express");
const app = express();

const methodOverride = require("method-override");

app.use(express.static("public"));

app.use(express.urlencoded());
app.use(methodOverride("_method"));

// Configuracion de nuestro View Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.listen(3000, () => {});

const getProducts = require("./utils/get-products");
const toThousand = require("./utils/to-thousand");

app.get("/", (req, res) => {
    const products = getProducts();
    res.render("index", { products: products, toThousand });
});

const productRouter = require("./routes/product-router");
app.use("/products", productRouter);

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});
