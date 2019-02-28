const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


//ClientID 491125404890-psvgo1022351ikrpe6djf4oepn315c3j.apps.googleusercontent.com

//ClientSecret xNmdsGMK0RLk2CDj6d7O8sWw


passport.use(new GoogleStrategy());







const PORT = process.env.PORT || 5000;
app.listen(PORT);
