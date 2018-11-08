const Service = require('./class.model');
const schema = require('./class-type');

module.exports = {

// list services by teachers id
    
    getClass: (request, h) => {
        const { query } = request;
        return Service.findById(query.id)
            .then(result => h.response({result}));
    },

    createClass: (request, h) => {
        const result = schema.validate(request.payload);
        if (result.error) {
            return h.response({err: 'missing params'}).code(400);
        }
        return Service.create(result.value)
            .then((classType) => h.response({classType}))
            .catch((err) => h.response({err}));
    },

    updateClass: (request, h) => {
        const result = schema.validate(request.payload);
        if (result.error) {
            return h.response({err: 'missing params'}).code(400);
        }
        return Service.update(result.value)
            .then(() => h.response(result.value))
            .catch((err) => h.response({err}));
    },


    // remove service and its subscription per class_id -->  service_id
    // what if there's a consumer with active subscription? TDB

    // removeService: (request, h) => {
    //     const result = schema.validate(request.payload);
    //     if (result.error) {
    //         return h.response({err: 'missing params'}).code(400);
    //     }
    //     return ; // handler required
    // }
};