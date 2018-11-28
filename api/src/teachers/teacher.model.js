'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherModel = new Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  companyName: {type: String, required: true},
  email: {type: String, required: true},
  title: {type: String, required: true}
});

module.exports = mongoose.model('Teacher', teacherModel, 'teachers');