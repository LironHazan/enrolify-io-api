
const controller = require('./provider.controller');

module.exports = [
  {
    method: 'GET',
    path: '/provider',
    handler: controller.getProvider
  },
  {
    method: 'POST',
    path: '/provider/create',
    handler: controller.createProvider
  }
];