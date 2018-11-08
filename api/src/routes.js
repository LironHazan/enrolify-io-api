const teacher = require('./teachers/routes');
const students = require('./students/routes');
const classType = require('./class-type/routes');
const subscription = require('./subscription/routes');

module.exports = [
  ...teacher,
  ...students,
  ...classType,
  ...subscription
];