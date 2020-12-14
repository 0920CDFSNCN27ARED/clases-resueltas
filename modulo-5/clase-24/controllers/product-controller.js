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
        const products = getProducts();
        const newId = products[products.length - 1].id + 1;

        products.push(req.body);

        saveProducts(products);

        res.redirect(`/products/detail/${newId}`);
    },
    edit: (req, res) => {
        const products = getProducts();
        const requiredProduct = products.find((prod) => {
            return prod.id == req.params.id;
        });

        requiredProduct.name = req.body.name;
        requiredProduct.category = req.body.category;
        requiredProduct.price = req.body.price;
        requiredProduct.discount = req.body.discount;

        saveProducts(products);

        res.redirect(`/products/detail/${req.params.id}`);
    },
    delete: (req, res) => {
        const products = getProducts();
        const reqProductIndex = products.findIndex((prod) => {
            return prod.id == req.params.id;
        });

        products.splice(reqProductIndex, 1);

        saveProducts(products);

        res.redirect("/products");
    },
};
