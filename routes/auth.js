const express = require('express');
const router = express.Router();
const passportGoogle = require('../auth/google');
const passportGithub = require('../auth/github');


// login with google butonuna basıldığında çalışacak kısım altta
router.get('/google', passportGoogle.authenticate(
    'google',
    {
        scope: ['profile'] // Google'da login olacak kişiden hangi bilgileri isteyeceksin. (e-mail vs)
    }
));

router.get('/google/callback', passportGoogle.authenticate(
    'google',
    {
        failureRedirect: '/' // hatalı giriş olunca yönlendireceğin route (şuan indexe gidiyor) (Error!)
    }),
    (req, res) => {
        res.redirect('/chat'); // login başarılı ise bizi chat route'una yönlendirecek.
    });


router.get('/github',
    passportGithub.authenticate('github'));

router.get('/github/callback',
    passportGithub.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/chat');
    });

module.exports = router;