
class ConsumersService {

  constructor() {}

  composeConsumer(payload) {
    if (!this.isConsumerValid(payload)) {
      return null;
    }
    return {
      fname: payload.fname,
      lname: payload.lname,
      subscriptionType: payload.subscriptionType,
      providerId: payload.providerId,
      subscriptionId: payload.subscriptionId
    };
  }

  isConsumerValid(payload) {
    return payload.fname && payload.lname && payload.subscriptionType && payload.providerId && payload.subscriptionId;
  }
}
module.exports =  ConsumersService;
