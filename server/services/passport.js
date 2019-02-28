const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL:'/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id})
      .then((existingUser) => {
        if (existingUser) {
          //We already have a record
          //pass a callback without any errors
          done(null,existingUser);
        }else{
          //Make a new record
          //save de new User in Db and pass to callback
          new User({googleId:profile.id }).save()
            .then(user => done(null,user))
        }
      })
  })
);
