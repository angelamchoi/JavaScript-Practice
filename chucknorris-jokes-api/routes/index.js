var express = require('express');
var router = express.Router();
const chuckCtrl = require('../controllers/chuck'); // always set up controllers

/* GET home page. */
router.get('/', chuckCtrl.index); // refers to the index.ejs page

module.exports = router;
