const controller = require('./class-type.controller');

module.exports = [
  {
    method: 'GET',
    path: '/class',
    handler: controller.getClass
  },
  {
    method: 'POST',
    path: '/class/add',
    handler: controller.createClass
  },
  {
    method: 'POST',
    path: '/class/update',
    handler: controller.updateClass
  },
  {
    method: 'DELETE',
    path: '/class/remove',
    handler: () => {}
  }
];