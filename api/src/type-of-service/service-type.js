const Joi = require('joi');

const schema = Joi.object().keys({
    _id: Joi.string(),
    providerId: Joi.string().required(),
    name: Joi.string().required(),
    duration: Joi.number().required(),
    maxParticipators: Joi.number().required(),
    subscriptionType: Joi.string().required(),
}).with('fname', 'lname');

const validate = (value, cb) => {
    return Joi.validate(value, schema, cb);
};

module.exports = {
    validate,
};