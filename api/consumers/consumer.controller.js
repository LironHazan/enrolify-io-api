const Consumer = require('./consumer.model');
const Util = require('../services/util');
const util = new Util();

module.exports = {

  listConsumers: (request, h) => {
    return Consumer.find({})
      .exec()
      .then((consumers) => h.response({consumers}))
      .catch((err) => h.response({err}));
  },

  createConsumer: (request, h) => {
    const keys = ['fname', 'lname', 'mail', 'subscriptionType', 'providerId', 'subscriptionId'];
    const consumer = util.composeModel(request.payload, keys);
    if (!consumer) {
      console.log('error');
      return h.response({err: 'missing params'}).code(400);
    }
    return Consumer.create(consumer)
      .then((consumer) => h.response({consumer}))
      .catch((err) => h.response({err}));
  }

};