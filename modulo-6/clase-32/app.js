const express = require("express");

const path = require("path");
const moment = require("moment");
const methodOverride = require("method-override");
const createError = require("http-errors");

const indexRouter = require("./routes/index");
const moviesRouter = require("./routes/movies");
const actorsRouter = require("./routes/actors");
const genresRouter = require("./routes/genres");

const app = express();
app.listen(3000);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.locals.moment = moment;
app.locals.getActorName = (actor) => {
    return `${actor.firstName} ${actor.lastName}`;
};

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(path.resolve(__dirname, "./public")));

//Routes
app.use("/movies", moviesRouter);
app.use("/actors", actorsRouter);
app.use("/genres", genresRouter);

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError.NotFound());
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
