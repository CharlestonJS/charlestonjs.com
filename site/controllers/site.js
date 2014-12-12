'use strict';

exports.home = function (req, res) {
  res.render('site/home', {title: 'Charleston JS'});
};

exports.login = function (req, res) {
  res.render('site/login', {title: 'Charleston JS'});
};