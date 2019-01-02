const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// log request to the console
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);
app.get('*', ({ res }) => res.status(200).send({
	message: 'Welcome to the jungle!'
}));

module.exports = app;