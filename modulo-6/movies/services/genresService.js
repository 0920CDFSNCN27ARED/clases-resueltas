const { Genre } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Genre.findByPk(id, {
            include: ["movies"],
        });
    },
    findAll: async () => {
        return await Genre.findAll({
            include: ["movies"],
        });
    },
    create: async (payload) => {
        return await Genre.create({
            ...payload,
        });
    },
    update: async (id, payload) => {
        const genre = await this.findOne(id);
        await genre.update({
            ...payload,
        });
    },
    destroy: async (id) => {
        await Genre.destroy({
            where: {
                id,
            },
        });
    },
};
