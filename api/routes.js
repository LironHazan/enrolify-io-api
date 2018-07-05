const provider = require('./provider/routes');
const consumers = require('./consumers/routes');

module.exports = [
  ...provider,
  ...consumers
];