'use strict';

const amqp = require('./lib/amqp');

module.exports = agent => {
  amqp(agent);
};
