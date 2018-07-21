
const controller = require('./provider.controller');

module.exports = [
  {
    method: 'GET',
    path: '/provider/{id?}',
    handler: controller.getProvider
  },
  {
    method: 'POST',
    path: '/provider/create',
    handler: controller.createProvider
  }
];