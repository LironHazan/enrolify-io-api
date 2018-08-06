const Joi = require('joi');

const schema = Joi.object().keys({
    _id: Joi.string(),
    fname: Joi.string().alphanum().min(3).max(30).required(),
    lname: Joi.string().alphanum().min(3).max(30).required(),
    companyName: Joi.string().required(),
    type: Joi.string().required(),
    email: Joi.string().email({ minDomainAtoms: 2 })
}).with('fname', 'lname');

const validate = (value, cb) => {
    return Joi.validate(value, schema, cb);
};

module.exports = {
    validate,
};