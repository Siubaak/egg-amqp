'use strict';

const amqp = require('amqplib');

module.exports = app => {
  app.beforeStart(function* () {
    try {
      app.amqp = yield amqp.connect(app.config.amqp);
    } catch (err) {
      app.coreLogger.error(`[egg-amqp] ${err.toString()}`);
    }
  });
};
