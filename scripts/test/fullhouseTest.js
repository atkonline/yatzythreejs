"use strict";
function test_init(){
  
}
console.log("test");

var score = 
    {
    Ones: -1,
    Twos: -1,
    Threes: -1,
    Fours: -1,
    Fives: -1,
    Sixes: -1,
    Bonus: -1,
    OnePair: -1,
    TwoPairs: -1,
    Threeofakind: -1,
    Fourofakind: -1,
    FullHouse: -1,
    Smallstraight: -1,
    Largestraight: -1,
    Chance: -1,
    Yatzy: -1
    };
// object that stores valid moves that have been calculated 
var availableMoves = {
    Ones: -1,
    Twos: -1,
    Threes: -1,
    Fours: -1,
    Fives: -1,
    Sixes: -1,
    Bonus: -1,
    OnePair: -1,
    TwoPairs: -1,
    Threeofakind: -1,
    Fourofakind: -1,
    FullHouse: -1,
    Smallstraight: -1,
    Largestraight: -1,
    Chance: -1,
    Yatzy: -1,
    validScoreEntryRange : [5,30],
    error: [0]
};
// Object stores which moves have not been used yet
var MovesLeft = {
    Ones: true,
    Twos: true,
    Threes: true,
    Fours: true,
    Fives: true,
    Sixes: true,
    Bonus: true,
    OnePair: true,
    TwoPairs: true,
    Threeofakind: true,
    Fourofakind: true,
    FullHouse: true,
    Smallstraight: true,
    Largestraight: true,
    Chance: true,
    Yatzy: true
};

var lockdice = [false, false, false, false, false];
var endTurn = false;
/** STATE **/
var turns = 15;
var dices = [0, 0 ,0, 0, 0];
var _selected_row;
var turnPhase = 0;

function add_scenario_fulhouse_last_turn(){
  turnPhase = 3;
  dices = [2,2,4,4,4];
}


function testFullHouse(){
    if(turnPhase==3 && availableMoves.FullHouse !==-1 && MovesLeft.FullHouse ==true && turns >0){
        score.FullHouse = availableMoves.FullHouse; 
        MovesLeft.FullHouse = false; // move has been selected and is no longer available
        //row.lastElementChild.innerHTML= score.FullHouse;
        printMessage("so your collecting FullHouse now are you ;)");
        console.log("FullHouse removed");
        turns--;
        endTurn = false; 
        turnPhase = 0;
       }
         //not end of turn player is just sketching in the scorecard value: 1 or 2
         if(turnPhase<3  && MovesLeft.FullHouse ==true && turns >0){
           //if(availableMoves.FullHouse ==-1){ row.lastElementChild.innerHTML= "0";}
           //else { row.lastElementChild.innerHTML= availableMoves.FullHouse; }
          
           
          }
       //move not available and will give a penalty
        else if(turnPhase==3  && MovesLeft.FullHouse ==true && turns >0){
        //row.lastElementChild.innerHTML = 0;
        MovesLeft.FullHouse = false; // move has been selected and is no longer available
        //row.lastElementChild.innerHTML= score.FullHouse;
        //printMessage("Fail  X");
        console.log("FullHouse removed");
        turns--;
        endTurn = false; 
        turnPhase = 0;
       
       }
       
}

//Run Test Full House JS


add_scenario_fulhouse_last_turn();

testFullHouse();