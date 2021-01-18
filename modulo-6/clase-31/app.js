const express = require("express");
const path = require("path");

const app = express();
app.listen(3000);

//Middlewares
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded());

//Routes

app.get("/", (req, res) => {
    res.send("Hello World!");
});
