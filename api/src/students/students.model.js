'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');


const studentsModel = new Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  email: {type: String, required: true},
  subscriptionType: {type: String, required: false},
  providerId: {type: Schema.Types.ObjectId, required: false},
  subscriptionId: {type: Schema.Types.ObjectId, required: false}
});

module.exports = mongoose.model('Consumer', studentsModel, 'consumers');