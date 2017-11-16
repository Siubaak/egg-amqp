# egg-amqp

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-amqp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-amqp
[travis-image]: https://img.shields.io/travis/Siubaak/egg-amqp.svg?style=flat-square
[travis-url]: https://travis-ci.org/Siubaak/egg-amqp
[download-image]: https://img.shields.io/npm/dm/egg-amqp.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-amqp

Amqp client for egg framework with [amqplib](https://www.npmjs.com/package/amqplib).

## Install

```bash
$ npm i egg-amqp --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.amqp = {
  enable: true,
  package: 'egg-amqp',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.amqp = {
  protocol: 'amqp',
  hostname: 'localhost',
  port: 5672,
  username: 'guest',
  password: 'guest',
  vhost: '/',
  // opts: {},
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

### Produce

```js
const ch = yield app.amqp.createChannel();
yield ch.assertQueue('test');
ch.sendToQueue(queue, new Buffer('hello world'));
```

### Consume

```js
const ch = yield app.amqp.createChannel();
yield ch.assertQueue('test');
const msg = yield new Promise(resolve => ch.consume(queue, msg => resolve(msg)));
ch.ack(msg);

console.log(msg.content.toString()); // hello world
```

## Questions & Suggestions

Please open an issue [here](https://github.com/Siubaak/egg-amqp/issues).

## License

[MIT](LICENSE)
