'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionModel = new Schema({
  serviceId: {type: Schema.Types.ObjectId, required: true},
  name: {type: String, required: true},
  type: {type: String, required: true},
  maxTimeAttendance: {type: Number, required: true},
  willReset: {type: Boolean, required: true},
  lastRenewal: {type: Date, required: true},
});

module.exports = mongoose.model('Subscription', subscriptionModel, 'subscriptions');