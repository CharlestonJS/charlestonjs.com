module.exports = function (router) {
  'use strict';
  /* GET home page. */
  router.route('/')
    .get(function(req, res) {
      res.render('index', {title: 'Express'});
    });
};
