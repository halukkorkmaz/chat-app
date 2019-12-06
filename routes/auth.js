const express = require('express');
const router = express.Router();
const passportGoogle = require('../auth/google');

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

module.exports = router;