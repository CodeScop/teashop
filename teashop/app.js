var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bluebird = require('bluebird');
//importing a session object from express and storing it into the session variable
const session = require('express-session');
//the session variable (object) is passed to a function invoked by 'connect-mongodb-session'
//the result of that function call is stored in MongoDBStore. That result contains a constructor which we call with new on line 21.
const MongoDBStore = require('connect-mongodb-session')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var api = require('./routes/api.routes');
const authRouter = require('./routes/auth');

var app = express();

const store = new MongoDBStore({
  uri: 'mongodb://127.0.0.1:27017/teashop',
  collection: 'sessions'
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'i hope this works',
    resave: false,
    saveUninitialized: false,
    store: store
    //session middleware does all of the cookie setting and parsing for us. We can customize ourselves by adding cookie attribute
  })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', api);
app.use('/', authRouter);

mongoose.connect('mongodb://127.0.0.1:27017/teashop', { useNewUrlParser: true })
.then(()=> { 
  console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/teashop`)
})
.catch(()=> { 
  console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/teashop`)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
