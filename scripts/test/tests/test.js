"use strict";
var expect = require('chai').expect;
var fullhouse = require('./yatzy-test-suite/fullhouse.js');
var yatzy = require('./yatzy-test-suite/yatzy.js');
var smallStraight = require('./yatzy-test-suite/smallStraight.js');
var straight = require('./yatzy-test-suite/straight.js');



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

describe('smallStraight(dicesArray)', function () {
  it('should return true if 4 dices are in an ascending row', function () {
    
    // 1. ARRANGE
    var dices = [1,3,2,0,1];
   
    // 2. ACT
    let result = smallStraight(dices);

    // 3. ASSERT
    expect(result).to.be.equal(true);

  });
});

describe('smallStraight(dicesArray)', function () {
  it('should return false if there is no sequence of 4 numbers in a row', function () {
    
    // 1. ARRANGE
    var dices = [1,0,2,2,2];
   
    // 2. ACT
    let result = smallStraight(dices);
    console.log(result);

    // 3. ASSERT
    expect(result).to.be.equal(false);

  });
});

describe('straight(dicesArray)', function () {
  it('should return true if 5 numbers in ascending order', function () {
    
    // 1. ARRANGE
    var dices = [0,1,2,3,4];
   
    // 2. ACT
    let result = straight(dices);
    // 3. ASSERT
    expect(result).to.be.equal(true);

  });
});

describe('Straight_Return_False_Test(dicesArray)', function () {
  it('should return false if there are not 5 numbers in ascending order', function () {
    
    // 1. ARRANGE
    var dices = [0,1,2,3,2];
   
    // 2. ACT
    let result = straight(dices);
    // 3. ASSERT
    expect(result).to.be.equal(false);

  });
});