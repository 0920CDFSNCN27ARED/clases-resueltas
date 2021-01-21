const { Actor } = require("../database/models");

module.exports = {
    index: async (req, res) => {
        const actors = await Actor.findAll();

        res.render("actors/index", { actors });
    },
    detail: async (req, res) => {
        const actor = await Actor.findByPk(req.params.id);

        res.send({ actor });
    },
    showEdit: async (req, res) => {
        //TODO
    },
    update: async (req, res) => {
        //TODO
    },
    showCreate: async (req, res) => {
        //TODO
    },
    create: async (req, res) => {
        //TODO
    },
    delete: async (req, res) => {
        //TODO
    },
};
