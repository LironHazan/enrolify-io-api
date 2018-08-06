const controller = require('./subscription.controller');

module.exports = [
  {
    method: 'GET',
    path: '/subscriptions',
    handler: controller.getSubscriptions
  },
  {
    method: 'POST',
    path: '/subscription/add',
    handler: controller.createSubscription
  },
  {
    method: 'POST',
    path: '/subscription/update',
    handler: controller.updateSubscription
  }
];