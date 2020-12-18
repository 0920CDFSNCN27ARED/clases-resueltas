const getUsers = require("../utils/get-users");
const saveUsers = require("../utils/save-users");
const bcrypt = require("bcrypt");

module.exports = {
    login: (req, res) => {
        const users = getUsers();
        const user = users.find((user) => {
            return (
                user.user == req.body.user &&
                bcrypt.compareSync(req.body.pass, user.pass)
            );
        });

        console.log(user);

        if (!user) return res.redirect("/auth/login");

        req.session.loggedUserId = user.id;

        return res.redirect("/");
    },
    register: (req, res) => {
        const users = getUsers();

        const lastUserIndex = users.length - 1;
        const lastUser = users[lastUserIndex];
        const newId = lastUser ? lastUser.id + 1 : 1;

        delete req.body.pass_confirm;

        const newUser = {
            id: newId,
            ...req.body,
            pass: bcrypt.hashSync(req.body.pass, 12),
            avatar: req.file.filename,
        };

        users.push(newUser);
        saveUsers(users);

        res.redirect("/auth/login");
    },
    showLogin: (req, res) => {
        res.render("login");
    },
    showRegister: (req, res) => {
        res.render("register");
    },
};
