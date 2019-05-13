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

function ClearPencilledMoves(clickedRowName){
    let ML = MovesLeft;
    /** Description Clears the pencilled in moves on move 2
     * so that only chose scores are visible
     */
   
            if(ML.Ones ==true){
                document.getElementById("cell1").innerHTML = "";
                
            }
            if(ML.Twos ==true){
                document.getElementById("cell2").innerHTML = "";
            }
            if(ML.Threes ==true){
                document.getElementById("cell3").innerHTML = "";
            }
            if(ML.Fours ==true){
                document.getElementById("cell4").innerHTML = "";
            }
            if(ML.Fives ==true){
                document.getElementById("cell5").innerHTML = "";
            }
            if(ML.Sixes ==true){
                document.getElementById("cell6").innerHTML = "";
            }
            if(ML.Bonus ==true){
                document.getElementById("cellBonus").innerHTML = "";
            }
            if(ML.OnePair ==true){
                document.getElementById("cellOnePair").innerHTML = "";
            }
            if(ML.TwoPairs ==true){
                document.getElementById("cellTwoPair").innerHTML = "";
            }
            
            if(ML.Threeofakind ==true){
                document.getElementById("cellThreeOfAKind").innerHTML = "";
            }
            if(ML.Fourofakind ==true){
                document.getElementById("cellFourOfAKind").innerHTML = "";
            }
            if(ML.FullHouse ==true){
                document.getElementById("cellFullHouse").innerHTML = "";
            }
            if(ML.Smallstraight ==true){
                document.getElementById("cellSmallStraight").innerHTML = "";
            }
            if(ML.Largestraight ==true){
                document.getElementById("cellLargeStraight").innerHTML = "";
            }
            if(ML.Chance ==true){
                document.getElementById("cellChance").innerHTML = "";
            }
            if(ML.Yatzy ==true){
                document.getElementById("cellYatsy").innerHTML = "";
            }

     
}

function ValidateDices(){


}
function ClearScoreCard(){

}
function testFullHouse(){
    
}