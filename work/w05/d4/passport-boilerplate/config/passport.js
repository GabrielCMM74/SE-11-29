const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Student = require('../models/student');

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) { // verify callback
    // a user has logged in via OAuth!
    // console.log(profile, "<----- Profile")
    // Fetch the User from the database and provide them back to passport 

  }
));




