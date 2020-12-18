const fs = require("fs");

function logger(req, res, next) {
    const url = req.originalUrl;

    fs.appendFileSync("./logs.txt", url + "\n");

    next();
}

module.exports = logger;
