
class Util {

  constructor() {}

  composeModel(payload, keys) {
    console.log(payload);
    if(keys.length === 0 || Object.keys(payload).length === 0) {
      return null;
    }
    if (Object.keys(payload).length !== keys.length) {
      return null;
    }
    if (this.differentKeys(Object.keys(payload), keys).length > 0) {
      return null;
    }
    return keys.reduce((model, key) => {
      model[key] = payload[key];
      return model;
    }, {});
  }

  differentKeys(payloadKeys, schemaKeys) {
    return schemaKeys.filter(schemaKey => !payloadKeys.includes(schemaKey));
  }
}


module.exports =  Util;
