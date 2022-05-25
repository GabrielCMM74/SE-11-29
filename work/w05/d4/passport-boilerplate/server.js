var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// session middleware
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');
// configure Passport
require('./config/passport');

// require our routes
var indexRoutes = require('./routes/index');
var studentsRoutes = require('./routes/students');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// mount the session middleware
app.use(session({
  secret: 'SEI Rocks!',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize()); // straight from the docs
app.use(passport.session());


// to make sure req.user is accessible in every view
app.use(function(req, res, next){
  // attached to locals is what the property/variable that will be availible throughout our application 
  // in ejs
  res.locals.user = req.user; // if we are not logged in req.user will be undefined
  next();
})

// mount all routes with appropriate base paths
app.use('/', indexRoutes);
app.use('/', studentsRoutes);

// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;
