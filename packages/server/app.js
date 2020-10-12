const createHttpError = require('http-errors');
const express = require('express');

const router = require('./router');

const app = express();

app.use(express.json());

app.use('/api', router);

// catch 404 and forward to error handler
app.use(function (_req, res, next) {
  next(createHttpError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500).send(err);
});

module.exports = app;
