'use strict';

const Good = require('good');
const GoodConsole = require('good-console');
const AuthCookie = require('hapi-auth-cookie');
const authentication = require('./entities/authentication');
const users = require('./entities/users');
const blogs = require('./entities/blogs');

module.exports = (db) => {
  const plugins = [];

  // Good Plugin
  plugins.push({
    register: Good,
    options: {
      reporters: [{
        reporter: GoodConsole,
        events: {
          response: '*',
          log: '*'
        }
      }]
    }
  });

  // hapi-auth-cookie
  plugins.push({
    register: AuthCookie,
    options: {}
  });

  // Login Entity Plugin
  plugins.push({
    register: authentication,
    options: {
      db: db
    }
  });

  // Users Entity Plugin
  plugins.push({
    register: users,
    options: {
      db: db
    }
  });

  // Blogs Entity Plugin
  plugins.push({
    register: blogs,
    options: {
      db: db
    }
  });

  return plugins
};