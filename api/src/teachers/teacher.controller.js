const Provider = require('./teacher.model');
const schema = require('./teacher');

module.exports = {

  getTeacher: (request, h) => {
    const { query } = request;
    return Provider.findById(query.id)
        .then(result => h.response({result}));
  },

  createTeacher: (request, h) => {
    const result = schema.validate(request.payload);
    if (result.error) {
      return h.response({err: 'missing params'}).code(400);
    }
    return Provider.create(result.value)
      .then((teacher) => h.response({teacher}))
      .catch((err) => h.response({err}));
  },

  updateTeacher: (request, h) => {
      const result = schema.validate(request.payload);
      if (result.error) {
      return h.response({err: 'missing params'}).code(400);
    }
    return Provider.update(result.value)
      .then(() => h.response(result.value))
      .catch((err) => h.response({err}));
    }

};