'use strict';

const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.Promise = global.Promise;

db.on('error', function (err) {
  console.error('mongodb connection error:', err);
  process.exit(1);
});

db.once('open', function () {
  console.info('Connected to mongodb.');
});

//mongoose.connect('mongodb://localhost/nodepop');
mongoose.connect('mongodb://admin:123456@http://ec2-54-212-243-167.us-west-2.compute.amazonaws.com/nodepop');

module.exports = db;
