const Subscription = require('./subscription.model');
const schema = require('./subscription');

module.exports = {

    getSubscriptions: (request, h) => {
        const { query } = request;
        return Subscription.findById(query.id)
            .then(result => h.response({result}));
    },

    createSubscription: (request, h) => {
        const result = schema.validate(request.payload);
        if (result.error) {
            return h.response({err: 'missing params'}).code(400);
        }
        return Subscription.create(result.value)
            .then((provider) => h.response({provider}))
            .catch((err) => h.response({err}));
    },

    updateSubscription: (request, h) => {
        const result = schema.validate(request.payload);
        if (result.error) {
            return h.response({err: 'missing params'}).code(400);
        }
        return Subscription.update(result.value)
            .then(() => h.response(result.value))
            .catch((err) => h.response({err}));
    }
};