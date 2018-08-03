const Joi = require('joi');

const schema = Joi.object().keys({
    _id: Joi.string(),
    providerId: Joi.string().required(),
    subscriptionId: Joi.string().required(),
    fname: Joi.string().alphanum().min(3).max(30).required(),
    lname: Joi.string().alphanum().min(3).max(30).required(),
    subscriptionType: Joi.string().required(),
    email: Joi.string().email({ minDomainAtoms: 2 })
}).with('fname', 'lname');

const validate = (value, cb) => {
    return Joi.validate(value, schema, cb);
};

module.exports = {
    validate,
};