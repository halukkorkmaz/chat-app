const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  if (!req.user)
    res.render('index', { title: 'Express' }); // user login değil ise index yönlendir.
  else
    res.redirect('/chat'); // login ise /chat'e yönlendir. Amaç her uyg refresh yediğinde index'e yönlendirmesin.
});

module.exports = router;
