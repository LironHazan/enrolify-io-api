const Service = require('./service.model');
const schema = require('./service-type');

module.exports = {

// list services by provider id
    getService: (request, h) => {
        const { query } = request;
        return Service.findById(query.id)
            .then(result => h.response({result}));
    },

    createService: (request, h) => {
        const result = schema.validate(request.payload);
        if (result.error) {
            return h.response({err: 'missing params'}).code(400);
        }
        return Service.create(result.value)
            .then((provider) => h.response({provider}))
            .catch((err) => h.response({err}));
    },

    updateService: (request, h) => {
        const result = schema.validate(request.payload);
        if (result.error) {
            return h.response({err: 'missing params'}).code(400);
        }
        return Service.update(result.value)
            .then(() => h.response(result.value))
            .catch((err) => h.response({err}));
    },


    // remove service and its subscription per provider_id -->  service_id
    // what if there's a consumer with active subscription? TDB

    // removeService: (request, h) => {
    //     const result = schema.validate(request.payload);
    //     if (result.error) {
    //         return h.response({err: 'missing params'}).code(400);
    //     }
    //     return ; // handler required
    // }
};