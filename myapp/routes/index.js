var express = require('express');
var router = express.Router();

let get_landing = require('../controllers/landing');

/* GET home page. */
router.get('/', get_landing.get_landing)
module.exports = router;
