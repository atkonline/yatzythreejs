var expect = require('chai').expect;
var fullhouse = require('./yatzy-test-suite/fullhouse');


describe('fullhouse(dicesArray)', function () {
    it('should return true if a pair and 3 of the same numbers', function () {
      
      // 1. ARRANGE
      dices[2,2,5,5,5]
     
  
      // 2. ACT
      var result = fullhouse(dices);
  
      // 3. ASSERT
      expect(result).to.be.equal(true);
  
    });
  });