const Provider = require('./provider.model');
const schema = require('./provider');

module.exports = {

  getProvider: (request, h) => {
    const { query } = request;
    return Provider.findById(query.id)
        .then(result => h.response({result}));
  },

  createProvider: (request, h) => {
    const result = schema.validate(request.payload);
    if (result.error) {
      return h.response({err: 'missing params'}).code(400);
    }
    return Provider.create(result.value)
      .then((provider) => h.response({provider}))
      .catch((err) => h.response({err}));
  },

  updateProvider: (request, h) => {
      const provider = request.payload;
      const result = schema.validate(provider);
      if (result.error) {
      return h.response({err: 'missing params'}).code(400);
    }
    return Provider.update(provider)
      .then(() => h.response(result.value))
      .catch((err) => h.response({err}));
    }

};