'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/amqp.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/amqp-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should produce a msg', () => {
    return request(app.callback())
      .get('/p')
      .query({ msg: 'hello world' })
      .expect(200);
  });
  it('should consume a msg', () => {
    return request(app.callback())
      .get('/c')
      .expect(200)
      .expect({ msg: 'hello world' });
  });
});
