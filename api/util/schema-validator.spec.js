const expect = require('chai').expect;
const Util = require('./schema-validator');
const util = new Util();

describe('testing composeModel()', () =>  {
  it('should compose a model by given a valid payload and keys', () => {
    const payload = {
      fname: 'foo',
      lname: 'bar',
      subscriptionType: 'card',
      providerId: '666',
      subscriptionId: '_666'
    };
    const keys = ['fname', 'lname', 'subscriptionType', 'providerId', 'subscriptionId'];
    const model = util.composeModel(payload, keys);
    expect(model.fname).to.be.equal('foo');

  });
  it('should return null when given an invalid payload with missing keys', () => {
    const payload = {
      lname: 'bar',
      subscriptionType: 'card',
      providerId: '666',
      subscriptionId: '_666'
    };
    const keys = ['fname', 'lname', 'subscriptionType', 'providerId', 'subscriptionId'];
    const model = util.composeModel(payload, keys);
    expect(model).to.be.equal(null);

  });
  it('should return null when given an invalid payload with wrong keys', () => {
    const payload = {
      lname: 'bar',
      subscriptionType: 'card',
      providerId: '666',
      subscriptionId: '_666'
    };
    const keys = ['wrong', 'lname', 'subscriptionType', 'providerId', 'subscriptionId'];
    const model = util.composeModel(payload, keys);
    expect(model).to.be.equal(null);

  });
});

describe('testing differentKeys()', () =>  {
  it('should be 0 when has same keys', () => {
    const keysA = ['fname', 'lname', 'subscriptionType', 'providerId', 'subscriptionId'];
    const keysB = ['fname', 'lname', 'subscriptionType', 'providerId', 'subscriptionId'];
    const result = util.differentKeys(keysB, keysA);
    expect(result.length).to.be.equal(0);
  });
  it('should be more than 0 when has at least one wrong key', () => {
    const keysA = ['fname', 'lname', 'subscriptionType', 'providerId', 'subscriptionId'];
    const keysB = ['wrong', 'lname', 'subscriptionType', 'providerId', 'subscriptionId'];
    const result = util.differentKeys(keysA, keysB);
    expect(result.length).to.be.equal(1);
  });
});