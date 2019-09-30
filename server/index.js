'use strict'

// dependencies
import express from 'express'
import path from 'path'

// const passport = require('passport');
import passport from 'passport'
// const Strategy = require('passport-local').Strategy;
import { strategy, LocalStrategy } from 'passport-local'
// const db = require('./db'); // placeholder

// set our express options
const app = express();
app.set('port', process.env.PORT || 3000);
const REACT_DIR = path.join(__dirname, '../client'); // NEW
const HTML_FILE = path.join(REACT_DIR, 'index.html'); // NEW
app.use(express.static(REACT_DIR)); // NEW

// Passport.initalize middleware
// app.configure(function() {
//   app.use(express.static('public'));
//   app.use(express.cookieParser());
//   app.use(express.bodyParser());
//   app.use(express.session({ secret: 'keyboard cat' }));
//   app.use(passport.initialize());
//   app.use(passport.session());
//   app.use(app.router);
// });

// Local Authentication
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));


// placeholder route
app.get('/', (req, res) => {
 res.sendFile(HTML_FILE); // EDIT
});

// placeholder: login
app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
});


// face the world
const hotPort = app.get('port');
const server = app.listen(hotPort, () => {
    console.log(`App listening on port ${hotPort}!`)
});

// for Mocha/Chai test purposes
export default server;
