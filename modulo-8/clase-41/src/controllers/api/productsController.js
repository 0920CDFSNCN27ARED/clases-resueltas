const { Product, Sequelize } = require("../../database/models");
const Op = Sequelize.Op;

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
};
