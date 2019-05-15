"use strict";
var expect = require('chai').expect;
var fullhouse = require('./yatzy-test-suite/fullhouse.js');
var yatzy = require('./yatzy-test-suite/yatzy.js');



describe('fullhouse(dicesArray)', function () {
    it('should return true if dice roll is  a pair of dice and 3 of the same dice', function () {
      
      // 1. ARRANGE
      var dices = [3,3,2,2,2];
     
      // 2. ACT
      let result = fullhouse(dices);
  
      // 3. ASSERT
      expect(result).to.be.equal(true);
  
    });
  });



describe('yatzy(dicesArray)', function () {
  it('should return true if all dice are the same value', function () {
    
    // 1. ARRANGE
    var dices = [4,4,4,4,4];
   
    // 2. ACT
    let result = yatzy(dices);

    // 3. ASSERT
    expect(result).to.be.equal(true);

  });
});