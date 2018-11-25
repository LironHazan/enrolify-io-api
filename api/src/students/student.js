const Joi = require('joi');

const schema = Joi.object().keys({
    _id: Joi.string(),
    fname: Joi.string().required(),
    lname: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email({ minDomainAtoms: 2 })
}).with('fname', 'lname');

const validate = (value, cb) => {
    return Joi.validate(value, schema, cb);
};

module.exports = {
    validate,
};