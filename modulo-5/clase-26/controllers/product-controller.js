const getProducts = require("../utils/get-products");
const saveProducts = require("../utils/save-products");
const path = require("path");
const fs = require("fs");

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
        });
    },

    getAll: (req, res) => {
        const products = getProducts();

        res.render("products/list", {
            products,
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
        const indiceUltimoProducto = products.length - 1;
        const elUltimoProducto = products[indiceUltimoProducto];
        const newId = elUltimoProducto.id + 1;

        const product = {
            id: newId,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            discount: req.body.discount,
            image: req.file.filename,
        };

        products.push(product);

        saveProducts(products);

        res.redirect(`/products/${newId}`);
    },
    edit: (req, res) => {
        const products = getProducts();
        const requiredProduct = products.find((prod) => {
            return prod.id == req.params.id;
        });

        const filename = req.file ? req.file.filename : requiredProduct.image;

        requiredProduct.name = req.body.name;
        requiredProduct.category = req.body.category;
        requiredProduct.price = req.body.price;
        requiredProduct.discount = req.body.discount;

        //Delete old image
        if (requiredProduct.image != filename) {
            fs.unlinkSync(
                path.resolve(
                    __dirname,
                    "/../public/images/",
                    requiredProduct.image
                )
            );
        }

        requiredProduct.image = filename;

        saveProducts(products);

        res.redirect(`/products/${req.params.id}`);
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
