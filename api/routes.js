const provider = require('./provider/routes');
const consumers = require('./consumers/routes');
const serviceType = require('./type-of-service/routes');
const subscription = require('./subscription/routes');

module.exports = [
  ...provider,
  ...consumers,
  ...serviceType,
  ...subscription
];