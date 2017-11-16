'use strict';

module.exports = app => {
  app.get('/p', app.controller.rabbitmq.produce);
  app.get('/c', app.controller.rabbitmq.consume);
};
