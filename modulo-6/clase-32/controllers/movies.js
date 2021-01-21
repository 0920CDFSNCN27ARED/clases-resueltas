const { Movie } = require("../database/models");

module.exports = {
    index: async (req, res) => {
        const movies = await Movie.findAll();
        res.render("movies/index", { movies });
    },

    detail: async (req, res) => {
        const movie = await Movie.findByPk(req.params.id);
        res.send(movie);
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

    addActor: async (req, res) => {
        //TODO
    },

    updateActor: async (req, res) => {
        //TODO
    },

    removeActor: async (req, res) => {
        //TODO
    },
};
