const { Genre } = require("../database/models");

module.exports = {
    index: async (req, res) => {
        const genres = await Genre.findAll();

        res.render("genres/index", { genres });
    },
    detail: async (req, res) => {
        const genre = await Genre.findByPk(req.params.id);

        res.send(genre);
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
