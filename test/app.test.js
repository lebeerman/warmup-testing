const assert = require('chai').assert;
const app = require('../app');


describe('Welcome to the TestingDome', ()=>{
  describe('#First Test: There should be a function called isFun()',()=>{
    it('should return true!', ()=>{
      assert.equal(app.isFun(), true);
    })
  });
});
