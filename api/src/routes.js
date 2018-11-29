const students = require('./students/routes');
const classType = require('./class-type/routes');
const subscription = require('./subscription/routes');

module.exports = [
  ...students,
  ...classType,
  ...subscription
];