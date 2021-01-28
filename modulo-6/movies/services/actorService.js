const { Actor } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Actor.findByPk(id, {
            include: ["movies"],
        });
    },
    findAll: async () => {
        return await Actor.findAll({
            include: ["movies"],
        });
    },
    create: async (payload) => {
        return await Actor.create({
            ...payload,
        });
    },
    update: async (id, payload) => {
        const actor = await this.findOne(id);
        payload.profilePic = payload.file
            ? "/images/actors/" + payload.file.filename
            : actor.profilePic;
        delete payload.file;
        await actor.update({
            ...payload,
        });
    },
    destroy: async (id) => {
        await Actor.destroy({
            where: {
                id,
            },
        });
    },
};
