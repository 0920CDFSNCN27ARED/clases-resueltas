const getProducts = require("../utils/get-products");
const toThousand = require("../utils/to-thousand");

module.exports = {
    getOne: (req, res) => {
        const products = getProducts();
        const requiredProduct = products.find((prod) => {
            return prod.id == req.params.id;
        });
        if (requiredProduct == null) {
            return res
                .status(404)
                .send("404 not found. <br> ¡Houston, poseemos problemas!");
        }

        res.render("products/detail", {
            product: requiredProduct,
            toThousand,
        });
    },

    getAll: (req, res) => {
        const products = getProducts();

        res.render("products/list", {
            products,
            toThousand,
        });
    },
    showCreate: (req, res) => {
        res.render("products/create");
    },

    showEdit: (req, res) => {
        const products = getProducts();
        const requiredProduct = products.find((prod) => {
            return prod.id == req.params.id;
        });
        if (requiredProduct == null) {
            return res
                .status(404)
                .send("404 not found. <br> ¡Houston, poseemos problemas!");
        }
        res.render("products/edit", {
            product: requiredProduct,
        });
    },
    create: (req, res) => {
        const message = "Product Created: " + JSON.stringify(req.body);
        res.send(message);
    },
    edit: (req, res) => {
        const products = getProducts();
        const requiredProduct = products.find((prod) => {
            return prod.id == req.params.id;
        });

        console.log(products);

        requiredProduct.name = req.body.name
        requiredProduct.category = req.body.category
        requiredProduct.price = req.body.price
        requiredProduct.discount = req.body.discount

        console.log(products);

        saveProducts(products);
    },
};
