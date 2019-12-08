const express = require('express');
const router = express.Router();
const passportGithub = require('../auth/github');


// login with google butonuna basıldığında çalışacak kısım altta
router.get('/github',
    passportGithub.authenticate(
        'github',
        {
            scope: ['user'] // Google'da login olacak kişiden hangi bilgileri isteyeceksin. (e-mail vs)
        }
));

router.get('/github/callback',
    passportGithub.authenticate('github', { failureRedirect: '/' }), // hatalı giriş olunca yönlendireceğin route (şuan indexe gidiyor) (Error!)
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/chat'); // login başarılı ise bizi chat route'una yönlendirecek.
});

module.exports = router;