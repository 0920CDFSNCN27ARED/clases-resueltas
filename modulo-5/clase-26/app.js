const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const getProducts = require("./utils/get-products");
const toThousand = require("./utils/to-thousand");
const authenticate = require("./middlewares/auth/authenticate");
const logger = require("./middlewares/logger");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const accessLogStream = fs.createWriteStream(path.join(__dirname, "logs.txt"), {
    flags: "a",
});

/// APP CONFIG
const app = express();
// Configuracion de nuestro View Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.listen(3000, () => {});

/// APPLY VIEWS VARIABLES ANDS FUNCTIONS
app.locals.toThousand = toThousand;
app.locals.user = null;

/// MIDDLEWARES
app.use(morgan("tiny", { stream: accessLogStream }));
app.use(express.static("public"));
app.use(
    session({
        secret: "los gatitos son lo mejor!!",
    })
);
app.use(methodOverride("_method"));
app.use(express.urlencoded());
app.use(authenticate);

/// ROUTES
app.get("/", (req, res, next) => {
    const products = getProducts();
    res.render("index", {
        products: products,
    });
});

const productRouter = require("./routes/product-router");
app.use("/products", productRouter);

const authRouter = require("./routes/auth-router");
app.use("/auth", authRouter);
