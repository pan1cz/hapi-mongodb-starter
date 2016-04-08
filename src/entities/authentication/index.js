'use strict';

exports.register = (server, options, next) => {
  const DB = require('../../db');
  const model = require('./model');
  const db = new DB(options.db, 'users');
  const handler = require('./handler')(server, db);

  // Expose Users DB if need be
  server.expose('users', () => db);

  // Add the users routes
  server.route([
    {
      method: 'POST',
      path: '/login',
      handler: handler.login,
      config: {
        auth: false,
        validate: {
          payload: model.login
        }
      }
    },
    {
      method: 'GET',
      path: '/logout',
      handler: handler.logout
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'login'
};
