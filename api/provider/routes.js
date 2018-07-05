
const controller = require('./provider');

module.exports = [
  {
    method: 'GET',
    path: '/service-provider',
    handler: controller.getProvider
  },
  {
    method: 'POST',
    path: '/service-provider',
    handler: controller.updateProvider
  }
];