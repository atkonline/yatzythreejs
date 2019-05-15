"use strict";
var expect = require('chai').expect;
var fullhouse = require('./yatzy-test-suite/fullhouse.js');


describe('fullhouse(dicesArray)', function () {
    it('should return true if a pair of dices and 3 of the same dices', function () {
      
      // 1. ARRANGE
      dices[1,1,3,3,3];
     
  
      // 2. ACT
      let result = fullhouse([1,1,3,3,3]);
  
      // 3. ASSERT
      expect(result).to.be.equal(true);
  
    });
  });