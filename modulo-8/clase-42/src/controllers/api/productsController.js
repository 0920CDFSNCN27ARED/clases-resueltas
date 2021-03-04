const { Product, Sequelize, sequelize } = require("../../database/models");
const Op = Sequelize.Op;
const { QueryTypes } = Sequelize;

const GIPHY_BASE_URL = "https://api.giphy.com/v1";

module.exports = {
    latest: async (req, res) => {
        const page = req.query.page ? Number(req.query.page) : 0;
        const count = await Product.count();
        const products = await Product.findAll({
            order: [["createdAt", "DESC"]],
            offset: page * 8,
            limit: 8,
        });

        let nextPage = null;
        if (count > page * 8) {
            nextPage = req.baseUrl + req.path + `?page=${page + 1}`;
        }
        let prevPage = null;
        if (page > 0) {
            prevPage = req.baseUrl + req.path + `?page=${page - 1}`;
        }
        const lastPage =
            req.baseUrl + req.path + `?page=${Math.floor(count / 8)}`;

        res.send({
            meta: {
                status: 200,
                url: req.originalUrl,
                prevPage: prevPage,
                nextPage: nextPage,
                lastPage: lastPage,
                totalCount: count,
            },
            data: products,
        });
    },

    offers: async (req, res) => {
        const page = req.query.page ? Number(req.query.page) : 0;
        const count = await Product.count();
        const products = await Product.findAll({
            where: {
                discount: {
                    [Op.gt]: 0,
                },
            },
            offset: page * 8,
            limit: 8,
        });

        let nextPage = null;
        if (count > page * 8) {
            nextPage = req.baseUrl + req.path + `?page=${page + 1}`;
        }
        let prevPage = null;
        if (page > 0) {
            prevPage = req.baseUrl + req.path + `?page=${page - 1}`;
        }
        const lastPage =
            req.baseUrl + req.path + `?page=${Math.floor(count / 8)}`;

        res.send({
            meta: {
                status: 200,
                url: req.originalUrl,
                prevPage: prevPage,
                nextPage: nextPage,
                lastPage: lastPage,
                totalCount: count,
            },
            data: products,
        });
    },

    filterByCategory: async (req, res) => {
        //req.query.category

        const categoryNameFilterKey = `$${Product.CATEGORY_ALIAS}.name$`;
        const whereObject = {};
        whereObject[categoryNameFilterKey] = req.query.category;

        const results = await Product.findAll({
            where: whereObject,
            include: [Product.CATEGORY_ALIAS, "brand", "user"],
        });

        res.send(results);
    },

    gifyRandom: async (req, res) => {
        const result = await axios.get("/gifs/random", {
            baseURL: GIPHY_BASE_URL,
            params: {
                api_key: "CNiRVOVw47tBdejvxdL625WLIT49xAL6",
                tag: "",
                rating: "g",
            },
        });

        res.send(result.data.data);
    },
};
