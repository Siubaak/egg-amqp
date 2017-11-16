'use strict';

const queue = 'test';

module.exports = app => {
  return class extends app.Controller {
    * produce(ctx) {
      const { msg } = ctx.query;
      if (!msg) {
        ctx.status = 400;
        return;
      }
      const ch = yield app.amqp.createChannel();
      yield ch.assertQueue(queue);
      ch.sendToQueue(queue, new Buffer(msg));
      ctx.status = 200;
    }
    * consume(ctx) {
      const ch = yield app.amqp.createChannel();
      yield ch.assertQueue(queue);
      const msg = yield new Promise(resolve => ch.consume(queue, msg => resolve(msg)));
      ch.ack(msg);
      ctx.status = 200;
      ctx.body = { msg: msg.content.toString() };
    }
  };
};
