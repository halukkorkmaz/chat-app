function  isAuthenticated(req, res, next) {
    if (req.isAuthenticated())
        next(); // Kullanıcı login olduysa bir sonraki route'a yönlenir.
    else
        res.redirect('/'); // Kullanıcı login olmadıysa anasayfa route'una yönlenir.
}

module.exports = isAuthenticated;