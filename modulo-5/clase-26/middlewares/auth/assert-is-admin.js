function assertIsAdmin(req, res, next) {
    if (!res.locals.user.admin) {
        res.redirect("/unauthorized");
    } else {
        next();
    }
}

module.exports = assertIsAdmin;
