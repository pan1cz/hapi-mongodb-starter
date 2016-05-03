module.exports = {
  name: 'session',
  scheme: 'cookie',
  mode: 'required',
  options: {
    password: '3c28a5a4-86e7-4d6d-bc0d-fd03dd265073', // cookie secret
    cookie: 'session', // Cookie name
    redirectTo: false,
    isSecure: false, // required for non-https applications
    ttl: 24* 60 * 60 * 1000 // Set session to 1 day
  }
};
