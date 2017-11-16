'use strict';

/**
 * egg-amqp default config
 * api reference: http://www.squaremobius.net/amqp.node/channel_api.html
 * @member Config #amqp
 * @property {String} protocol - amqp or amqps
 * @property {String} hostname - the host of amqp server
 * @property {Number} port - the listening port of amqp server
 * @property {String} username - the login username of amqp server
 * @property {String} password - the login password of amqp server
 * @property {String} vhost - the virtual host of amqp server
 */
exports.amqp = {
  protocol: 'amqp',
  hostname: 'localhost',
  port: 5672,
  username: 'guest',
  password: 'guest',
  vhost: '/',
  // http://www.squaremobius.net/amqp.node/ssl.html
  // opts: {
  //   cert: certificateAsBuffer,      client cert
  //   key: privateKeyAsBuffer,        client key
  //   passphrase: 'MySecretPassword', passphrase for key
  //   ca: [caCertAsBuffer],           array of trusted CA certs
  // },
};
