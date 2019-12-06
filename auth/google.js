const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

//models
const User = require('../models/users');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_LOGIN_CLIENT_ID,
    clientSecret: process.env.GOOGLE_LOGIN_SECRET_ID,
    callbackURL: process.env.GOOGLE_LOGIN_CALLBACK_URL
}, ((accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    const data = profile._json;
    console.log(data);
})));

module.exports = passport;