'use strict';

const amqp = require('amqplib');

module.exports = app => {
  app.beforeStart(function* () {
    const config = app.config.amqp;
    try {
      app.amqp = yield amqp.connect(config, config.opts);
    } catch (err) {
      app.coreLogger.error(`[egg-amqp] ${err.toString()}`);
    }
  });
};
