const express = require("express");
const path = require("path");

const { Movie } = require("./database/models");

const app = express();
app.listen(3000);

//Middlewares
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded());

//Routes
app.get("/", async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.send(movies);
    } catch (err) {
        console.error(err);
        res.send("Hubo un error!");
    }
});
