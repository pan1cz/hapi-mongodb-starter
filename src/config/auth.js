module.exports = {
  name: 'session',
  scheme: 'cookie',
  mode: 'required',
  options: {
    password: 'Set a password', // cookie secret
    cookie: 'session', // Cookie name
    redirectTo: false,
    isSecure: false, // required for non-https applications
    ttl: 24* 60 * 60 * 1000 // Set session to 1 day
  }
};