const Consumer = require('./students.model');
const schema = require('./student');

module.exports = {

  listStudents: async (request, h) => {
      try {
      const { query } = request;
      const students = await Consumer.find({providerId: query.id}).exec();
      return h.response(students);
      } catch (err) {
          return h.response({err});
      }
  },

  createStudent: (request, h) => {
      console.log(request.payload);
      const result = schema.validate(request.payload);
      console.log(result.error);

    //   if (result.error) {
    //   return h.response({err: 'missing params'}).code(403);
    // }
    return Consumer.create(result.value)
      .then((student) => h.response({student}))
      .catch((err) => h.response({err}).code(403));
  },

  updateStudent: async (request, h) => {
    try {
        const result = schema.validate(request.payload);
        console.log(result.error);
        // if (result.error) {
        //     return h.response({err: 'missing params'}).code(403);
        // }

        //todo: remove it:
    
            await Consumer.updateOne(result.value);
            return h.response();
        } catch(err) {
            console.log(err);
            return h.response({err}).code(403);
        }
    }

};