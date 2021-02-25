function assertSignedIn(req, res, next) {
    if (!res.locals.user) {
        res.redirect(`/auth/login?returnUrl=${req.originalUrl}`);
    } else {
        next();
    }
}

module.exports = assertSignedIn;
