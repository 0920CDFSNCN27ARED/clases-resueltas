const express = require("express");
const app = express();

const session = require("express-session");

const methodOverride = require("method-override");

app.use(express.static("public"));

app.use(
    session({
        secret: "los gatitos son lo mejor!!",
    })
);

app.use(express.urlencoded());
app.use(methodOverride("_method"));

const logger = require("./middlewares/logger");
app.use(logger);

// Configuracion de nuestro View Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.listen(3000, () => {});

const getProducts = require("./utils/get-products");
const toThousand = require("./utils/to-thousand");

const authenticate = require("./middlewares/auth/authenticate");

app.get("/", authenticate, (req, res, next) => {
    const products = getProducts();
    res.render("index", {
        products: products,
        toThousand,
        user: req.loggedUser,
    });
});

const productRouter = require("./routes/product-router");
app.use("/products", productRouter);

const authRouter = require("./routes/auth-router");
app.use("/auth", authRouter);
