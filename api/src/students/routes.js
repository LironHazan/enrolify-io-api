const controller = require('./students.controller');

module.exports = [
  {
    method: 'GET',
    path: '/students',
    handler: controller.listStudents
  },
  {
    method: 'POST',
    path: '/consumer/add',
    handler: controller.createStudent
  },
  {
    method: 'POST',
    path: '/consumer/update',
    handler: controller.updateStudent
  }
];