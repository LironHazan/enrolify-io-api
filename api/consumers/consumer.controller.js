const Consumer = require('./consumer.model');
const schema = require('./consumer');

module.exports = {

  listConsumers: (request, h) => {
    const { query } = request;
    return Consumer.find({providerId: query.id})
      .exec()
      .then((consumers) => h.response({consumers}))
      .catch((err) => h.response({err}));
  },

  createConsumer: (request, h) => {
      const result = schema.validate(request.payload);
      if (result.error) {
      return h.response({err: 'missing params'}).code(400);
    }
    return Consumer.create(result.value)
      .then((consumer) => h.response({consumer}))
      .catch((err) => h.response({err}));
  },

  updateConsumer: (request, h) => {
        const result = schema.validate(request.payload);
        if (result.error) {
            return h.response({err: 'missing params'}).code(400);
        }
        return Consumer.update(result.value)
            .then(() => h.response(result.value))
            .catch((err) => h.response({err}));
    }

};