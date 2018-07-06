const Consumer = require('./consumer.model');
const ConsumersService = require('./consumer.service');
const consumerService = new ConsumersService();

module.exports = {

  listConsumers: (request, h) => {
    return Consumer.find({})
      .exec()
      .then((consumers) => h.response({consumers}))
      .catch((err) => h.response({err}));
  },

  createConsumer: (request, h) => {
    const consumer = consumerService.composeConsumer(request.payload);
    if (!consumer) {
      console.log('error');
      return h.response({err: 'missing params'}).code(400);
    }
    return Consumer.create(consumer)
      .then((consumer) => h.response({consumer}))
      .catch((err) => h.response({err}));
  }

};