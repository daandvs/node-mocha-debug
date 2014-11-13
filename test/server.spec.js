var server = require('../server');
var chai = require('chai');

describe('server test', function() {
  it('2 + 2 = 4', function() {
    var sum = 2 + 2;
    chai.assert.equal(4, sum);
  });
});
