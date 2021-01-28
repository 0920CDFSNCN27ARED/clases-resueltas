const { Movie } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Movie.findByPk(id, {
            include: ["actors", "genre"],
        });
    },
    findAll: async () => {
        return await Movie.findAll({
            include: ["actors", "genre"],
        });
    },
    create: async (payload) => {
        return await Movie.create({
            ...payload,
        });
    },
    update: async (id, payload) => {
        const genre = await this.findOne(id);
        await genre.update({
            ...payload,
        });
    },
    delete: async (id) => {
        await Movie.destroy({
            where: {
                id,
            },
        });
    },
};
