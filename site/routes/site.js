'use strict';

var siteCtrl = require('./../controllers/site'),
    express = require('express'),
    router = express.Router();

router.get('/', function (req, res) {
    siteCtrl.home(req, res);
});

router.get('/login', function (req, res) {
    siteCtrl.login(req, res);
});


module.exports = router;
