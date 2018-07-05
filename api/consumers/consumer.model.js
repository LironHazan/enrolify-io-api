'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const consumerModel = new Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  subscriptionType: {type: String, required: true},
  providerId: {type: Schema.Types.ObjectId, required: true},
  subscriptionId: {type: Schema.Types.ObjectId, required: true}
});

module.exports = mongoose.model('Consumer', consumerModel, 'consumers');