const { Movie, Genre, Actor, ActorMovie } = require("../database/models");
const genresService = require("../services/genresService");

module.exports = {
    index: async (req, res) => {
        const genres = await genresService.findAll();

        res.render("genres/index", { genres });
    },
    detail: async (req, res) => {
        const genre = await genresService.findOne(req.params.id);

        res.render("genres/detail", { genre });
    },
    showEdit: async (req, res) => {
        const genre = await genresService.findOne(req.params.id);

        res.render("genres/create-edit", { genre, title: "Edit Genre" });
    },
    update: async (req, res) => {
        await genresService.update(req.params.id, req.body);

        res.redirect("back");
    },
    showCreate: async (req, res) => {
        res.render("genres/create-edit", { title: "Create Genre" });
    },
    create: async (req, res) => {
        await genresService.create(req.body);

        res.redirect(`/genres/${genre.id}`);
    },
};
