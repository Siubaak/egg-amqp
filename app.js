'use strict';

const amqp = require('./lib/amqp');

module.exports = app => {
  amqp(app);
};
