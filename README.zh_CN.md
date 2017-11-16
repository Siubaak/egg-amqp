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

基于[amqplib](https://www.npmjs.com/package/amqplib)的amqp客户端。

## 安装

```bash
$ npm i egg-amqp --save
```

## 使用

```js
// {app_root}/config/plugin.js
exports.amqp = {
  enable: true,
  package: 'egg-amqp',
};
```

## 配置

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

详细配置见[config/config.default.js](config/config.default.js)。

## 例子

### 生产

```js
const ch = yield app.amqp.createChannel();
yield ch.assertQueue('test');
ch.sendToQueue(queue, new Buffer('hello world'));
```

### 消费

```js
const ch = yield app.amqp.createChannel();
yield ch.assertQueue('test');
const msg = yield new Promise(resolve => ch.consume(queue, msg => resolve(msg)));
ch.ack(msg);

console.log(msg.content.toString()); // hello world
```

## 提问及建议

请到[这里](https://github.com/Siubaak/egg-amqp/issues)进行交流。

## 协议

[MIT](LICENSE)
