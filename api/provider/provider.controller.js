const Provider = require('./provider.model');
const Util = require('../services/util');
const util = new Util();

module.exports = {

  getProvider: (request, h) => {
    return h.response({});
  },

  createProvider: (request, h) => {
    const keys = ['fname', 'lname', 'companyName', 'mail', 'type'];
    const provider = util.composeModel(request.payload, keys);
    if (!provider) {
      console.log('error');
      return h.response({err: 'missing params'}).code(400);
    }
    return Provider.create(provider)
      .then((provider) => h.response({provider}))
      .catch((err) => h.response({err}));
  }

};