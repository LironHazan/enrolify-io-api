const Joi = require('joi');

const schema = Joi.object().keys({
    _id: Joi.string(),
    serviceId: Joi.string().required(),
    name: Joi.string().required(),
    type: Joi.string().required(),
    maxTimeAttendance: Joi.number().required(),
    willReset: Joi.boolean().required(),
    lastRenewal: Joi.date().timestamp().raw().required(),
}).with('fname', 'lname');

const validate = (value, cb) => {
    return Joi.validate(value, schema, cb);
};

module.exports = {
    validate,
};