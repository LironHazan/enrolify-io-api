const controller = require('./service.controller');

module.exports = [
  {
    method: 'GET',
    path: '/consumers',
    handler: controller.listConsumers
  },
  {
    method: 'POST',
    path: '/consumer/add',
    handler: controller.createConsumer
  }
];