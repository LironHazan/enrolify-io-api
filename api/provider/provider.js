
module.exports = {

  getProvider: (request, h) => {
    return h.response({});
  },

  updateProvider: (request, h) => {
    let email = request.payload.email;
    return h.response({});
  }

};