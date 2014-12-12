var homeCtrl = require('./../controllers/site');

module.exports = function (router) {
  'use strict';
  router.route('/').get(function (req, res) {
    homeCtrl.index(req, res);
  });

  router.route('/login').get(function (req, res) {
    siteCtrl.login(req, res);
  });
};
