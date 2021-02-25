const { Genre } = require("../database/models");

module.exports = {
    index: async (req, res) => {
        const genres = await Genre.findAll();

        res.render("genres/index", { genres });
    },
    detail: async (req, res) => {
        const genre = await Genre.findByPk(req.params.id, {
            include: ["movies"],
        });

        res.send(genre);
    },
    showEdit: async (req, res) => {
        const genre = await Genre.findByPk(req.params.id);
        res.render("genres/edit", { genre });
    },
    update: async (req, res) => {
        const updateData = req.body;
        await Genre.update(updateData, {
            where: {
                id: req.params.id,
            },
        });
        res.redirect(`/genres/${req.params.id}`);
    },
    showCreate: async (req, res) => {
        return res.render("genres/create");
    },
    create: async (req, res) => {
        const createData = req.body;
        const genre = await Genre.create(createData);
        return res.redirect(`/genres/${genre.id}`);
    },
    delete: async (req, res) => {
        const genre = await Genre.findByPk(req.params.id, {
            include: ["movies"],
        });
        if (genre.movies.length > 0) {
            // MARCAMOS UN ERROR
            return res.redirect(`/genres/${req.params.id}/edit`);
        }
        await Genre.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.redirect(`/genres`);
    },
};
