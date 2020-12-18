const fs = require("fs");
const path = require("path");

function saveProducts(products) {
    const productsJSON = JSON.stringify(products, null, 2);
    fs.writeFileSync(path.resolve(__dirname, "../db.json"), productsJSON);
}

module.exports = saveProducts;
