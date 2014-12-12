var passport = require('passport');

module.exports = function (router) {
  'use strict';
  router.route('/auth/meetup').get(passport.authenticate('meetup'));

  router.route('/auth/meetup/callback').get(passport.authenticate('meetup', {failureRedirect: '/login'}),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

  router.route('/auth/github').get(passport.authenticate('github'));

  router.route('/auth/github/callback').get(passport.authenticate('github', {failureRedirect: '/login'}),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

  router.route('/auth/google').get(passport.authenticate('google', {scope: 'https://www.google.com/m8/feeds'}));

  router.route('/auth/google/callback').get(passport.authenticate('google', {failureRedirect: '/login'}),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

  router.route('/auth/twitter').get(passport.authenticate('twitter'));

  router.route('/auth/twitter/callback').get(passport.authenticate('twitter', {failureRedirect: '/login'}),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });
};
