function assertIsAdmin(req, res, next) {
    if (!res.locals.user.admin) {
        res.redirect("/");
    } else {
        next();
    }
}

module.exports = assertIsAdmin;
