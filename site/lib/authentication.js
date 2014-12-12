'use strict';

var passport = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    GithubStrategy = require('passport-github').Strategy,
    MeetupStrategy = require('passport-meetup').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY || 'fillmein',
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET || 'fillmein',
    callbackURL: process.env.TWITTER_AUTH_CALLBACK || 'http://127.0.0.1:8080/auth/twitter/callback'
  }, function (token, tokenSecret, profile, done) {
    /*User.findOrCreate({twitterId: profile.id}, function (err, user) {
     return done(err, user);
     });*/
  }
));

passport.use(new GoogleStrategy({
    consumerKey: process.env.GOOGLE_CONSUMER_KEY || 'fillmein',
    consumerSecret: process.env.GOOGLE_CONSUMER_SECRET || 'fillmein',
    callbackURL: process.env.GOOGLE_AUTH_CALLBACK || 'http://127.0.0.1:8080/auth/google/callback'
  }, function (token, tokenSecret, profile, done) {
    /*User.findOrCreate({googleId: profile.id}, function (err, user) {
     return done(err, user);
     });*/
  }
));

passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID || 'fillmein',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || 'fillmein',
    callbackURL: process.env.GITHUB_AUTH_CALLBACK || 'http://127.0.0.1:8080/auth/github/callback'
  }, function (accessToken, refreshToken, profile, done) {
    /*User.findOrCreate({ githubId: profile.id }, function (err, user) {
     return done(err, user);
     });*/
  }
));

passport.use(new MeetupStrategy({
    consumerKey: process.env.MEETUP_OAUTH_KEY || 'fillmein',
    consumerSecret: process.env.MEETUP_OAUTH_SECRET || 'fillmein',
    callbackURL: process.env.MEETUP_AUTH_CALLBACK || 'http://127.0.0.1:8080/auth/meetup/callback'
  },
  function (token, tokenSecret, profile, done) {
    /*User.findOrCreate({meetupId: profile.id}, function (err, user) {
     return done(err, user);
     });*/
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  /*User.findById(id, function (err, user) {
   done(err, user);
   });*/
});