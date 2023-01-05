const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const dogsRouter = require('./routes/dogs');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
console.log("-------------------");

app.use('/', indexRouter);
app.use('/users', usersRouter);
console.log("-------------------");
console.log("-------------------");

app.use('/dogs', dogsRouter);
console.log("-------------------");


console.log("-------------------");

module.exports = app;

console.log("-------------------");

