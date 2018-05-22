const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const index = require('./routes/index')

const app = express()

const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'client/server')))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.get('/api/ping', (req, res) => {
  res.json('pong')
})

app.get('/api/root-files', (req, res) => {
  res.json(getDirectories(__dirname))
})
app.get('/api/client-files', (req, res) => {
  res.json(getDirectories(__dirname + '/client'))
})
app.get('/api/build-files', (req, res) => {
  res.json(getDirectories(__dirname + '/client/build'))
})
app.get('/api/server-files', (req, res) => {
  res.json(getDirectories(__dirname + '/client/server'))
})

app.use('/api', index)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/server/index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

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
