const actorService = require("../services/actorService");

module.exports = {
    index: async (req, res) => {
        const actors = await actorService.findAll();

        res.render("actors/index", { actors });
    },
    detail: async (req, res) => {
        const actor = await actorService.findOne(req.params.id);

        res.render("actors/detail", { actor });
    },
    showEdit: async (req, res) => {
        const actor = await actorService.findOne(req.params.id);

        res.render("actors/create-edit", { actor, title: "Edit Actor" });
    },
    update: async (req, res) => {
        //valido y si se pudrio todo
        try {
            const payload = req.body;
            payload.file = req.file;
            await actorService.update(req.params.id, payload);
        } catch (err) {
            // flash("error", "mensaje de error");
        }
        res.redirect("back");
    },
    showCreate: async (req, res) => {
        res.render("actors/create-edit", { title: "Create Actor" });
    },
    create: async (req, res) => {
        const actor = await actorService.create(req.body);
        res.redirect(`/actors/${actor.id}`);
    },
    delete: async (req, res) => {
        try {
            await actorService.destroy(req.params.id);
            res.redirect("/actors");
        } catch (err) {
            res.redirect("back");
        }
    },
};
