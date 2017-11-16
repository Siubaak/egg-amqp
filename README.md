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

<!--
Description here.
-->

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
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
