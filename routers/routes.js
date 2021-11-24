module.exports = function (app) {
   require('./auth.router')(app);
   require('./user.router')(app);
   require('./customer.router')(app);
};
  