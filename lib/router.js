Router.configure({
  notFoundTemplate: 'notFound'
})

Router.route('/', function () {
  this.render('main');
});

Router.route('/register', function () {
  this.render('register');
});

Router.route('/register_error', function () {
  this.render('register-error');
});

Router.route('/login_error', function () {
  this.render('login-error');
});

Router.route('/photo', function () {
  this.render('photo');
});

Router.route('/photo_error', function () {
  this.render('photo-error');
});