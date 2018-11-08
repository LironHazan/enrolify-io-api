
const controller = require('./teacher.controller');

module.exports = [
  {
    method: 'GET',
    path: '/teachers/{id?}',
    handler: controller.getTeacher
  },
  {
    method: 'POST',
    path: '/teachers/create',
    handler: controller.createTeacher
  },
  {
    method: 'POST',
    path: '/teachers/update',
    handler: controller.updateTeacher
  }
];