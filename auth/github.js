const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

//models
const User = require('../models/users');

passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_LOGIN_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET_ID,
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        const data = profile._json;
        //console.log(data);

        User.findOrCreate({ // database için user nesnesi yoksa kaydet yoksa bul (find-or-create lib)
            githubId: profile.id
        }, {
            // User için hangi bilgileri saklayacaksın
            name: data.login,
            profilePhotoUrl: data.avatar_url
        }, function (err, user) {
            return cb(err, user);
        });
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;