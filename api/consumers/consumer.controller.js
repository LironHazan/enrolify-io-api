const Consumer = require('./consumer.model');

module.exports = {

  listConsumers: (request, h) => {
    return Consumer.find({})
      .exec()
      .then((consumers) => h.response({consumers}))
      .catch((err) => h.response({err}));
  },

  createConsumer: (request, h) => {
    if (!consumer) {
      console.log('error');
      return h.response({err: 'missing params'}).code(400);
    }
    return Consumer.create(consumer)
      .then((consumer) => h.response({consumer}))
      .catch((err) => h.response({err}));
  }

};