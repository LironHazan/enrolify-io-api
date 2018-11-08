'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const classModel = new Schema({
  name: {type: String, required: true},
  duration: {type: Number, required: true},
  maxParticipators: {type: Number, required: true},
  subscriptionType: {type: String, required: true},
  providerId: {type: Schema.Types.ObjectId, required: true},
});

module.exports = mongoose.model('Service', classModel, 'services');