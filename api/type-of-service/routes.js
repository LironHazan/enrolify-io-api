const controller = require('./service.controller');

module.exports = [
  {
    method: 'GET',
    path: '/list-services',
    handler: controller.getService
  },
  {
    method: 'POST',
    path: '/service/add',
    handler: controller.createService
  },
  {
    method: 'POST',
    path: '/service/update',
    handler: controller.updateService
  },
  {
    method: 'DELETE',
    path: '/service/remove',
    handler: controller.removeService
  }
];