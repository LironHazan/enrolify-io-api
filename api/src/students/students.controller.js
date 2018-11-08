const Consumer = require('./students.model');
const schema = require('./student');

module.exports = {

  listStudents: (request, h) => {
    const { query } = request;
    return Consumer.find({providerId: query.id})
      .exec()
      .then((students) => h.response({students}))
      .catch((err) => h.response({err}));
  },

  createStudent: (request, h) => {
      const result = schema.validate(request.payload);
      if (result.error) {
      return h.response({err: 'missing params'}).code(400);
    }
    return Consumer.create(result.value)
      .then((student) => h.response({student}))
      .catch((err) => h.response({err}));
  },

  updateStudent: (request, h) => {
        const result = schema.validate(request.payload);
        if (result.error) {
            return h.response({err: 'missing params'}).code(400);
        }
        return Consumer.update(result.value)
            .then(() => h.response(result.value))
            .catch((err) => h.response({err}));
    }

};