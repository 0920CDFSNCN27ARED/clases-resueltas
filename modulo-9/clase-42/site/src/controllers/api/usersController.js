const { User, Sequelize, sequelize } = require("../../database/models");
const Op = Sequelize.Op;
const { QueryTypes } = Sequelize;

module.exports = {
    count: async (req, res) => {
        const count = await User.count();
        res.send({
            count,
        });
    },
};
