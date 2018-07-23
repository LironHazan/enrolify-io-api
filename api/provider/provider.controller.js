const Provider = require('./provider.model');
const Util = require('../util/schema-validator');
const util = new Util();

module.exports = {

  getProvider: (request, h) => {
    console.log(request.payload);
    return Provider.findById(request.payload)
        .then(result => h.response({result}));
  },

  createProvider: (request, h) => {
    const keys = ['fname', 'lname', 'companyName', 'email', 'type'];
    console.log(request.payload);
    const provider = util.composeModel(request.payload, keys);
    if (!provider) {
      return h.response({err: 'missing params'}).code(400);
    }
    return Provider.create(provider)
      .then((provider) => h.response({provider}))
      .catch((err) => h.response({err}));
  },

  updateProvider: (request, h) => {
    const keys = ['fname', 'lname', 'companyName', 'email', 'type'];
    console.log(request.payload);
    const provider = util.composeModel(request.payload, keys);
    if (!provider) {
      return h.response({err: 'missing params'}).code(400);
    }
    return Provider.update(provider)
      .then((response) => {
          console.log(response);
          h.response({provider})
      })
      .catch((err) => h.response({err}));
    }

};