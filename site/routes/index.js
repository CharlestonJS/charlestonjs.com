var homeCtrl = require('./../controllers/home');

module.exports = function (router) {
  'use strict';
  router.route('/').get(function (req, res) {
    homeCtrl.index(req, res);
  });
};
