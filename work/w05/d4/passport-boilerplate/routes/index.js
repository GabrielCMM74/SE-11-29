var router = require('express').Router();
const passport = require('passport');

// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/students');
});

// Triggers the login


module.exports = router;