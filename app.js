var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var routes = require('./routes');
var api = require('./routes/api');
var comment = require('./routes/comment');
var sign = require('./routes/sign');
var mongoose = require('mongoose');

// 连接字符串格式为mongodb://主机/数据库名
mongoose.connect('mongodb://localhost/myblog');
var db = mongoose.connection;
db.on('error', function callback () {
  console.log("Connection error");
});

db.once('open', function callback () {
  console.log("Mongo working!");
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  store: new FileStore(),
  resave :false,
  saveUninitialized :false,
  secret: 'keyboard cat'
}));
// Routes

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/posts', api.posts);
app.get('/api/post/:id', api.post);
app.post('/signin/post',sign.signinPost);
app.post('/signup/post',sign.signupPost);
app.get('/signout',sign.signout);
app.post('/api/post', api.addPost);
app.post('/api/post/:id/comment', comment.commentPost);
app.get('/api/post/:id/comment', comment.comments);
app.delete('/api/post/:id/comment/:commentId/delete', comment.deleteComment);
app.put('/api/post/:id/comment/:commentId', comment.editComment);
app.put('/api/post/:id', api.editPost);
app.put('/api/post/:id/hidden',api.hiddenPost);
app.put('/api/post/:id/comment/:commentId/hidden',comment.hiddenComment);
app.delete('/api/post/:id', api.deletePost);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
