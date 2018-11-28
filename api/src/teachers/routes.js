
const controller = require('./teacher.controller');

module.exports = [
  {
    method: 'GET',
    path: '/teachers/{id?}',
    config: {
      description: 'Get teacher profile',
      tags: ['api', 'v1', 'techers']
    },
    handler: controller.getTeacher
  },
  {
    method: 'POST',
    path: '/teachers/create',
    config: {
      description: 'Create a teacher profile',
      tags: ['api', 'v1', 'techers']
    },
    handler: controller.createTeacher
  },
  {
    method: 'POST',
    path: '/teachers/update',
    config: {
      description: 'Update a teacher profile',
      tags: ['api', 'v1', 'techers']
    },
    handler: controller.updateTeacher
  }
];