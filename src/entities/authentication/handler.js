module.exports = (server, users) => {
  return {
    login: (request, reply) => {
      return users.find({
        'email': request.payload.email,
        'password': request.payload.password
      })
      .then((user) => {
          if (user) {
            request.cookieAuth.set(user);
            return reply('Login successful');
          } else {
            return reply('Wrong username or password');
          }
        }, (err) => {
          // return reply.redirect('/authentication');
          reply.handleError(err)
        })
      .then(reply, (err) => reply.handleError(err));
    },
    logout: (request, reply) => {
      request.cookieAuth.clear();
      return reply('Logout successful');
    }
  }
};
