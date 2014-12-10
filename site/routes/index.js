var homeCtrl = require('./../controllers/home');

module.exports = function (router) {
  'use strict';
  /* GET home page. */
  router.route('/')
    .get(function(req, res) {
      homeCtrl.index(req, res);
    });
};
