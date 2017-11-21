const passport = require("passport");
const User = require('../models/User');
const MediumStrategy = require('passport-slack').Strategy;

passport.use(new MediumStrategy({
    clientID: '8fc3d966003d',
    clientSecret: '9129633d6b985e5a93ca28690e3e3182c5a96e37',
    //callbackURL: "http://www.example.com/auth/medium/callback"
    callbackURL: "http://127.0.0.1:3000/auth/medium/callback"
  },
  (accessToken, refreshToken, profile, cb) => {
    User.findOrCreate({ mediumId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));