var router = require('express').Router();
var studentsCtrl = require('../controllers/students');

// GET /students
router.get('/students', studentsCtrl.index);






module.exports = router;
