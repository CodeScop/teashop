exports.getLogin = (req, res, next) => {
  console.log(req.session.isLoggedIn);
  res.render('auth', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  console.log(req.session.isLoggedIn);
  res.send("<h1>This response works</h1>");
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.send('<h1>You are now logged out</h1>');
  }); //method provided by express
};
