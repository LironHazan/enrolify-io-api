const controller = require('./students.controller');

module.exports = [
  {
    method: 'GET',
    path: '/students',
    handler: controller.listStudents
  },
  {
    method: 'POST',
    path: '/students/add',
    handler: controller.createStudent
  },
  {
    method: 'POST',
    path: '/students/update',
    handler: controller.updateStudent
  }
];