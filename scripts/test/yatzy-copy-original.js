"use strict";


module.exports.YatzyByOllieAtkins = 
function YatzyByOllieAtkins() {
//var audio = new Audio('roll_dice.mp3');

/** Type checking String */
var TypeCheckingStrings = {
    number: "number"
}

this.lockdice = [false, false, false, false, false];
this.endTurn = false;
/** STATE **/
this.turns = 15;
this.dices = [0, 0 ,0, 0, 0];
this._selected_row;
this.turnPhase = 0;

/** Game State Validation Functions */

var testmode = true;
          
this.validateTurnPhase = function(){
        let turnphaseType = typeof turnPhase;
        //turnPhase ="1"; test type checking
        if(turnphaseType === TypeCheckingStrings.number && (turnPhase=== 0 || turnPhase=== 1 || turnPhase===2 || turnPhase===3 ) ){
            return;
        }
        else if (turnphaseType !== TypeCheckingStrings.number){
            throw "Turnphase Data type invalid: " + (typeof turnphaseType) + "  (only Number type valid)";
         
        }
        else if( !(turnPhase=== 0 || turnPhase=== 1 || turnPhase===2) || turnPhase===3 ){
          
            console.log("Error Turnphase invalid!:  " + turnPhase + "  V(alid turnPhases 0,1,2)");
            throw "Invalid turn Phase Error";
        }

}
function ValidateDices(){
        //check dices values are between 5 Minumum roll and 30 maximum roll

}
function ClearScoreCard(){

}
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
// function FlashRow(string){
//     setTimeout(function(string) {
//         $(".scorecardMain ${replacements.name} tbody tr:first").css("background-color", "aqua").effect("highlight", {}, 3000);
//     }, 2000);
// }
//FlashRow()
function FlashSelected(){

}


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
this.availableMoves = {
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
this.MovesLeft = {
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
//public functions
this.printMessage = function printMessage(text){
    var msg = document.getElementById('Message');
    msg.innerHTML = text;
     
    }

    function printMessage(text){
        var msg = document.getElementById('Message');
        msg.innerHTML = text;
         
        }
this.addClickListenerToTableRows = function addClickListenerToTableRows(){
    var tbl = document.getElementById("scorecard");

    if (tbl !== null) {
        for (var i = 0; i < tbl.rows.length; i++) {
          
            for (var j = 0; j < tbl.rows[i].cells.length; j++){

                //get id of clicked cell e.g yatsy
                
                tbl.rows[i].cells[j].onclick = function () { scoreCard_ClickHandler(this); };
                event.stopPropagation();
                
               
            }
        }

    } 

}

this.getDiceImage = function getDiceImage(diceNumber) {

    if (diceNumber == 1) {
        return '<img src="images/dice_1.png" alt="diceNumber1" >';
    } else if (diceNumber == 2) {
        return '<img src="images/dice_2.png" alt="diceNumber2" >';
    } else if (diceNumber == 3) {
        return '<img src="images/dice_3.png" alt="diceNumber3" >';
    } else if (diceNumber == 4) {
        return '<img src="images/dice_4.png" alt="diceNumber4" >';
    } else if (diceNumber == 5) {
        return '<img src="images/dice_5.png" alt="diceNumber5" >';
    } else if (diceNumber == 6) {
        return '<img src="images/dice_6.png" alt="diceNumber6" >';
    }
}

var gamestate = {
    gamestatelist: ['notstarted','started','endofgame'],
    turn: 15,
    get getState() {
        return this.gamestate; 
    },
    gamestate : 'notstarted',
    setStateStarted : function(){
        
    }
}

this.GameHandler = function(maxTurns){
    var gamestateList = [null,'started','endofgame','turn'];
    var turn; 
    var availableMoves = {
        Ones: -1,
        Twos: -1,
        Threes: -1,
        Fours: -1,
        Fives: -1,
        Sixes: -1,
        Sum: -1,
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
        
    set Ones(sum){
        if(this.Ones ==-1){
            this.Ones = sum; 
        }
        else{
            console.log("ones score already selected: " + this.score.Ones);
        }
    },
    get Ones(){
            return this.Ones;
    }
    };


    var score = 
    {
    Ones: -1,
    Twos: -1,
    Threes: -1,
    Fours: -1,
    Fives: -1,
    Sixes: -1,
    Sum: -1,
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
    this.validateMove = function(){
            // validate wheter a certain move is still available
            // eg. ones 
            if (this.availableMoves.Ones !==-1){
                return true;
            }
            else{
                return false;
            }
    }
   
    var gamestate = {
        gamestatelist: ['notstarted','started','endofgame'],
        turn: 15,
        get getState() {
            return this.gamestate; 
        },
        gamestate : 'notstarted',
        setStateStarted : function(){
            
        }
    }

    this.maxTurns = maxTurns;
    this.state= function(){
    
    }
}
/**
 *  @param GameHandler
 * 
 * 
 * 
 * 
 */


this.YatsyGameHandler = new this.GameHandler(15);

//new click handler for table rows to fix issue

this.addClickListenerToTableCells = function addClickListenerToTableCells(){
    
    var tbl = document.getElementById("scorecard");

    if (tbl !== null) {
        for (var i = 0; i < tbl.rows.length; i++) {
                //get id of clicked cell e.g yatsy

                tbl.rows[i].onclick = function () { scoreCard_ClickHandler(this); };
                event.stopPropagation();
        }

    } 
}
/*-------------------Meat of the matter--------------------*/




function gameEnded(){
    var score = getScore(); 
    printMessage('Game ended.  Score: ' + score.toString());
}
this.getScore = function(){
    var _scores = Object.values(score)
    var totalScore = 0; 

    for (let index = 0; index < _scores.length; index++) {
        if (_scores[index] !== -1) {
            totalScore =+ _scores[index];
        }
       
        
    }
    return totalScore;
}
function printScore(scoreCard){
    let score = getScore();
    console.log(score);    
document.getElementById("cellTotalScore").innerHTML = score; 


}

/*ui-------------------------*/
function penaltyInvalidMove(){

}
function penaltyInvalidMoveUiEvent(){   

}
function Setlockdice(dicenumber) {
    if (lockdice[dicenumber]) {
        lockdice[dicenumber] = false;
    } else {
        lockdice[dicenumber] = true;
    }

    if (lockdice[dicenumber]) {
        document.getElementById("dice" + dicenumber).className = "lockdice";
       
       
    } else {
        document.getElementById("dice" + dicenumber).className = "dice";
     
    }
}
function unlockDices(){
    for (let i = 0; i < 5; i++) {
         var x = document.getElementById("dice" + i);
         x.classList.remove("lockdice");
         x.classList.add("dice");
         lockdice[i] = false; 
    }
}
function disableBtn() {
    var element = document.getElementById("btn");
    element.disabled = true;
    element = document.createElement("Button");
    element.id ="btn";
    
    // document.getElementByID("btn").disabled=true;
}

/*-------------------------ui*/

this.getAvailableMoves = function () {
   
   
    //Upper section combinations
    //Get as many of one kind as possible.
    // loops 6 times for dice

    //get the values of ones, twos, threes, fours, fives, sixes
    for (var x = 1; x < 7; x++) {
        var temppoints = 0;
        for (var i = 0; i < 5; i++) {
            if (dices[i] == x) {
                temppoints += x;
                
            }
        }

        if (x == 1) {
            availableMoves.Ones = temppoints;
        } else if (x == 2) {
            availableMoves.Twos = temppoints;
        } else if (x == 3) {
            availableMoves.Threes = temppoints;
        } else if (x == 4) {
            availableMoves.Fours = temppoints;
        } else if (x == 5) {
            availableMoves.Fives = temppoints;
        } else if (x == 6) {
            availableMoves.Sixes = temppoints;
        }
    }
   
    availableMoves.Chance = 0;
    for (var i = 0; i < 5; i++) {
        availableMoves.Chance += dices[i];
    }

    //one Pair
    if (availableMoves.Sixes >= 12) {
        availableMoves.OnePair = 12;
    } else if (availableMoves.Fives >= 10) {
        availableMoves.OnePair = 10;
    } else if (availableMoves.Fours >= 8) {
        availableMoves.OnePair = 8;
    } else if (availableMoves.Threes >= 6) {
        availableMoves.OnePair = 6;
    } else if (availableMoves.Twos >= 4) {
        availableMoves.OnePair = 4;
    } else if (availableMoves.Ones >= 2) {
        availableMoves.OnePair = 2;
    }

    //two pairs
    if (availableMoves.OnePair > 0) {
        if (availableMoves.Sixes >= 12 && availableMoves.OnePair != 12) {
            availableMoves.TwoPairs = availableMoves.OnePair + 12;
        } else if (availableMoves.Fives >= 10 && availableMoves.OnePair != 10) {
            availableMoves.TwoPairs = availableMoves.OnePair + 10;
        } else if (availableMoves.Fours >= 8 && availableMoves.OnePair != 8) {
            availableMoves.TwoPairs = availableMoves.OnePair + 8;
        } else if (availableMoves.Threes >= 6 && availableMoves.OnePair != 1) {
            availableMoves.TwoPairs = availableMoves.OnePair + 6;
        } else if (availableMoves.Twos >= 4 && availableMoves.OnePair != 12) {
            availableMoves.TwoPairs = availableMoves.OnePair + 4;
        } else if (availableMoves.Ones >= 2 && availableMoves.OnePair != 12) {
            availableMoves.TwoPairs = availableMoves.OnePair + 2;
        }
    }
    //Threeofakind
    if (availableMoves.Ones == 3) {
        availableMoves.Threeofakind = 3;
    } else if (availableMoves.Twos == 6) {
        availableMoves.Threeofakind = 6
    } else if (availableMoves.Threes == 9) {
        availableMoves.Threeofakind = 9;
    } else if (availableMoves.Fours == 12) {
        availableMoves.Threeofakind = 12;
    } else if (availableMoves.Fives == 15) {
        availableMoves.Threeofakind = 15;
    } else if (availableMoves.Sixes == 18) {
        availableMoves.Threeofakind = 18
    }

    //FullHouse
    if (availableMoves.Threeofakind > 0) {
        if (availableMoves.Sixes == 12 && availableMoves.Threeofakind != 18 && availableMoves.Threeofakind > 0) {
            availableMoves.FullHouse = availableMoves.Threeofakind + 12;
        } else if (availableMoves.Fives == 10 && availableMoves.Threeofakind != 15 && availableMoves.Threeofakind > 0) {
            availableMoves.FullHouse = availableMoves.Threeofakind + 10;
        } else if (availableMoves.Fours == 8 && availableMoves.Threeofakind != 12 && availableMoves.Threeofakind > 0) {
            availableMoves.FullHouse = availableMoves.Threeofakind + 8;
        } else if (availableMoves.Threes == 6 && availableMoves.Threeofakind != 9 && availableMoves.Threeofakind > 0) {
            availableMoves.FullHouse = availableMoves.Threeofakind + 6;
        } else if (availableMoves.Twos == 4 && availableMoves.Threeofakind != 6 && availableMoves.Threeofakind > 0) {
            availableMoves.FullHouse = availableMoves.Threeofakind + 4;
        } else if (availableMoves.Ones == 2 && availableMoves.Threeofakind != 3 && availableMoves.Threeofakind > 0) {
            availableMoves.FullHouse = availableMoves.Threeofakind + 2;
        }

    }

    //Fourofakind
    if (availableMoves.Ones == 4) {
        availableMoves.Fourofakind = availableMoves.Chance;
    } else if (availableMoves.Twos == 8) {
        availableMoves.Fourofakind = availableMoves.Chance;
    } else if (availableMoves.Threes == 12) {
        availableMoves.Fourofakind = availableMoves.Chance;
    } else if (availableMoves.Fours == 16) {
        availableMoves.Fourofakind = availableMoves.Chance;
    } else if (availableMoves.Fives == 20) {
        availableMoves.Fourofakind = availableMoves.Chance;
    } else if (availableMoves.Sixes == 24) {
        availableMoves.Fourofakind = availableMoves.Chance;
    }
    if (availableMoves.FullHouse > 0) {
        console.log('fullhouse');
    }

    //straight 1-2-3-4-5 or 2-3-4-5-6-
    if (availableMoves.Twos == 2 && availableMoves.Threes == 3 && availableMoves.Fours == 4 && availableMoves.Fives == 5) {
        //Smallstraight 1-2-3-4-5
        if (availableMoves.Ones == 1) {
            availableMoves.Smallstraight = 15;
        }
        // Largestraight 2-3-4-5-6
        if (availableMoves.Sixes == 1) {
            availableMoves.Largestraight = 20;
        }
    }

    
    //Threeofakind
    if (availableMoves.Ones == 5) {
        availableMoves.Yatzy = 5;
    } else if (availableMoves.Twos == 10) {
        availableMoves.Yatzy = 10;
    } else if (availableMoves.Threes == 20) {
        availableMoves.Yatzy = 20;
    } else if (availableMoves.Fours == 25) {
        availableMoves.Yatzy = 25;
    } else if (availableMoves.Fives == 30) {
        availableMoves.Yatzy = 30;
    } else if (availableMoves.Sixes == 36) {
        availableMoves.Yatzy = 36;
    }
}
this.scoreCard_ClickHandler = function (row) {
    
    // if(endTurn) {
    //     unlockDices();
    //     endTurn = false;

    // }
    
    validateTurnPhase();
    console.log("turnphase before: " + turnPhase);
    
     getAvailableMoves();
   
     if (turns == 0) {
      gameEnded();
      //detach event listeners from table
     }
     /* -------------------------New code logic Click handler repeat for other scores--------------------------------------*/
     if (row.id==='ones' ) {
      // check for valid move
      //&& score.Ones ===-1   
      //Turnphase is what roll number 1,2,3 out of a total of 3 allowed rolls per  represented by the data structure int of either =  0,1,2
      //If turnphase is not either 0,1,2 the script will throw and error in the console
      //MovesLeft = the move has not been chosen on the score sheet
      //available move = the move is a legal move, errors will give 0 point for moves chosen that are not available
  
      //scenarios:
      //1.the player is writing on scorecard 
      //2.end of the turn and the move is selected validated and points added 0 or +1 to=> +36
      //3.the game has not started
      //4.its the end of the game
            if(MovesLeft.Ones==false){
                printMessage("Ones Already Taken select another move");
                return;
            }
            if(MovesLeft.Ones ==true){  
                
                    if(turnPhase==3 && availableMoves.Ones !==-1 && turns >0){
                    score.Ones = availableMoves.Ones; 
                    MovesLeft.Ones = false; // move has been selected and is no longer available
                    row.lastElementChild.innerHTML= score.Ones;
                    printMessage("so your collecting ones now are you ;)");
                    console.log("Ones removed");
                    console.log("Turnphase if 2" + turnPhase)
                    turns--;
                    turnPhase = 0;
                    endTurn = true; 
                    console.log("Scorecard Clicked: Turnphase: " + turnPhase );
                    console.log('turns left' + turns);
                   
                    
                    return;    
                    }
                    //not end of turn player is just sketching in the scorecard value: 1 or 2
                    if(turnPhase<3 && availableMoves.Ones !==-1 && turns >0){
                    row.lastElementChild.innerHTML= availableMoves.Ones;
                    //printMessage("ones pencilled in you can still roll again");
                    console.log("Scorecard Clicked: Turnphase: " + turnPhase );
                    console.log('turns left' + turns);
                  
                    return;
                    }
                     //move not available and will give a penalty
                    else if(turnPhase==3  && turns >0){
                    row.lastElementChild.innerHTML = 0;
                    MovesLeft.Ones = false; // move has been selected and is no longer available
                    row.lastElementChild.innerHTML= score.Ones;
                    printMessage("Fail  X");
                    console.log("Ones removed");
                    turns--;
                    endTurn = true; 
                    turnPhase = 0;
                    console.log("Scorecard Clicked: Turnphase: " + turnPhase );
                    console.log('turns left' + turns);
                   
                    return;
                    
                    }
                    throw 'score card ones click handler error';
            }
    }
     /* -------------------------New code logic Click handler repeat for other scores--------------------------------------*/
   

     if (row.id==='twos' ) {
        if(MovesLeft.Twos ==true){  
            if(turnPhase==3 && availableMoves.Twos !==-1 && turns >0){
            score.Twos = availableMoves.Twos; 
            MovesLeft.Twos = false; // move has been selected and is no longer available
            row.lastElementChild.innerHTML= score.Twos;
            printMessage("so your collecting Twos now are you ;)");
            console.log("Turnphase if 2" + turnPhase)
            turns--;
            turnPhase = 0;
            endTurn = true; 
            console.log("Scorecard Clicked: Turnphase: " + turnPhase );
            console.log('turns left' + turns);
            console.log("score" + printScore(score));
            return;    
            }
            //not end of turn player is just sketching in the scorecard value: 1 or 2
            if(turnPhase<3 && availableMoves.Twos !==-1 && turns >0){
            row.lastElementChild.innerHTML= availableMoves.Twos;
            //printMessage("Twos pencilled in you can still roll again");
            console.log("Scorecard Clicked: Turnphase: " + turnPhase );
            console.log('turns left' + turns);
            //console.log("score" + printScore(score));
            return;
            }
             //move not available and will give a penalty
            else if(turnPhase==3  && turns >0){
            row.lastElementChild.innerHTML = 0;
            MovesLeft.Twos = false; // move has been selected and is no longer available
            row.lastElementChild.innerHTML= score.Twos;
            printMessage("Fail  X");
            console.log("Twos removed");
            turns--;
            endTurn = true; 
            turnPhase = 0;
            console.log("Scorecard Clicked: Turnphase: " + turnPhase );
            console.log('turns left' + turns);
            console.log("score" + printScore(score));
            return;
            
            }
            throw 'score card Twos click handler error';
        }
       
        
    }
    if (row.id==='threes' ) {
        validateTurnPhase();
            if(MovesLeft.Threes ===false){printMessage("Move: Threes already selected!");}

            if(MovesLeft.Threes ===true){  
                    if(turnPhase==3 && availableMoves.Threes !==-1 && turns >0){
                    score.Threes = availableMoves.Threes; 
                    MovesLeft.Threes = false; // move has been selected and is no longer available
                    row.lastElementChild.innerHTML= score.Threes;
                    printMessage("so your collecting Threes now are you ;)");
                    console.log("Turnphase if 2" + turnPhase)
                    turns--;
                    turnPhase = 0;
                    endTurn = true; 
                    console.log("Scorecard Clicked: Turnphase: " + turnPhase );
                    console.log('turns left' + turns);
                    console.log("score" + printScore(score));
                    return;    
                    }
                    //not end of turn player is just sketching in the scorecard value: 1 or 2
                    if(turnPhase<3 && availableMoves.Threes !==-1 && turns >0){
                    row.lastElementChild.innerHTML= availableMoves.Threes;
                    //printMessage("Threes pencilled in you can still roll again");
                    console.log("Scorecard Clicked: Turnphase: " + turnPhase );
                    console.log('turns left' + turns);
                    //console.log("score" + printScore(score));
                    return;
                    }
                    //move not available and will give a penalty
                    else if(turnPhase==3  && turns >0){
                    row.lastElementChild.innerHTML = 0;
                    MovesLeft.Threes = false; // move has been selected and is no longer available
                    row.lastElementChild.innerHTML= score.Threes;
                    printMessage("Fail  X");
                    console.log("Threes removed");
                    turns--;
                    endTurn = true; 
                    turnPhase = 0;
                    console.log("Scorecard Clicked: Turnphase: " + turnPhase );
                    console.log('turns left' + turns);
                    console.log("score" + printScore(score));
                    return;
                    
                    }
                    throw 'score card Threes click handler error';
            }


    }
    if (row.id==='fours' ) {
                      
        if(turnPhase==3 && availableMoves.Fours !==-1 && MovesLeft.Fours ==true && turns >0){
         score.Fours = availableMoves.Fours; 
         MovesLeft.Fours = false; // move has been selected and is no longer available
         row.lastElementChild.innerHTML= score.Fours;
         printMessage("so your collecting Fours now are you ;)");
         console.log("Fours removed");
         turns--;
         endTurn = false; 
         turnPhase = 0;
        }
        //not end of turn player is just sketching in the scorecard value: 1 or 2
        if(turnPhase<3 && availableMoves.Fours !==-1 && MovesLeft.Fours ==true && turns >0){
         row.lastElementChild.innerHTML= availableMoves.Fours;
         
        }
        //move not available and will give a penalty
        else if(turnPhase==3  && MovesLeft.Fours ==true && turns >0){
         row.lastElementChild.innerHTML = 0;
         MovesLeft.Fours = false; // move has been selected and is no longer available
         row.lastElementChild.innerHTML= score.Fours;
         printMessage("Fail  X");
         console.log("Fours removed");
         turns--;
         endTurn = false; 
         turnPhase = 0;
        
        }
    }
    if (row.id==='fives' ) {
                      
        if(turnPhase==3 && availableMoves.Fives !==-1 && MovesLeft.Fives ==true && turns >0){
         score.Fives = availableMoves.Fives; 
         MovesLeft.Fives = false; // move has been selected and is no longer available
         row.lastElementChild.innerHTML= score.Fives;
         printMessage("so your collecting Fives now are you ;)");
         console.log("Fives removed");
         turns--;
         endTurn = false; 
         turnPhase = 0;
        }
        //not end of turn player is just sketching in the scorecard value: 1 or 2
        if(turnPhase<3 && availableMoves.Fives !==-1 && MovesLeft.Fives ==true && turns >0){
         row.lastElementChild.innerHTML= availableMoves.Fives;
         
        }
        //move not available and will give a penalty
        else if(turnPhase==3  && MovesLeft.Fives ==true && turns >0){
         row.lastElementChild.innerHTML = 0;
         MovesLeft.Fives = false; // move has been selected and is no longer available
         row.lastElementChild.innerHTML= score.Fives;
         printMessage("Fail  X");
         console.log("Fives removed");
         turns--;
         endTurn = false; 
         turnPhase = 0;
        
        }
    }
    if (row.id==='sixes' ) {
                      
        if(turnPhase==3 && availableMoves.Sixes !==-1 && MovesLeft.Sixes ==true && turns >0){
         score.Sixes = availableMoves.Sixes; 
         MovesLeft.Sixes = false; // move has been selected and is no longer available
         row.lastElementChild.innerHTML= score.Sixes;
         printMessage("So you want to be a high roller ;)");
         console.log("Sixes removed");
         turns--;
         endTurn = false; 
         turnPhase = 0;
        }
        //not end of turn player is just sketching in the scorecard value: 1 or 2
        if(turnPhase<3 && availableMoves.Sixes !==-1 && MovesLeft.Sixes ==true && turns >0){
         row.lastElementChild.innerHTML= availableMoves.Sixes;
         
        }
        //move not available and will give a penalty
        else if(turnPhase==3  && MovesLeft.Sixes ==true && turns >0){
         row.lastElementChild.innerHTML = 0;
         MovesLeft.Sixes = false; // move has been selected and is no longer available
         row.lastElementChild.innerHTML= score.Sixes;
         printMessage("Fail  X");
         console.log("Sixes removed");
         turns--;
         endTurn = false; 
         turnPhase = 0;
        
        }
    }
    
if (row.id==='bonus' ) {
                      
    if(getScore()>62){
     score.Bonus =35;
      
     MovesLeft.Bonus = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= "35";
     printMessage("your score is ab 63 bonus collected!");
     console.log("Bonus removed");
     
     
    }
    else {
        printMessage("Try later :-)");
    }
}
if (row.id==='onepair' ) {
                      
    if(turnPhase==3 && availableMoves.OnePair !==-1 && MovesLeft.OnePair ==true && turns >0){
     score.OnePair = availableMoves.OnePair; 
     MovesLeft.OnePair = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.OnePair;
     printMessage("so your collecting OnePair now are you ;)");
     console.log("OnePair removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    }
    //not end of turn player is just sketching in the scorecard value: 1 or 2
    if(turnPhase<3 && availableMoves.OnePair !==-1 && MovesLeft.OnePair ==true && turns >0){
     row.lastElementChild.innerHTML= availableMoves.OnePair;
     
    }
    //move not available and will give a penalty
    else if(turnPhase==3  && MovesLeft.OnePair ==true && turns >0){
     row.lastElementChild.innerHTML = 0;
     MovesLeft.OnePair = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.OnePair;
     printMessage("Fail  X");
     console.log("OnePair removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    
    }
}
if (row.id==='twopairs' ) {
                      
    if(turnPhase==3 && availableMoves.TwoPairs !==-1 && MovesLeft.TwoPairs ==true && turns >0){
     score.TwoPairs = availableMoves.TwoPairs; 
     MovesLeft.TwoPairs = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.TwoPairs;
     printMessage("so your collecting TwoPairs now are you ;)");
     console.log("TwoPairs removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    }
    //not end of turn player is just sketching in the scorecard value: 1 or 2
    if(turnPhase<3 && availableMoves.TwoPairs !==-1 && MovesLeft.TwoPairs ==true && turns >0){
     row.lastElementChild.innerHTML= availableMoves.TwoPairs;
     
    }
    //move not available and will give a penalty
    else if(turnPhase==3  && MovesLeft.TwoPairs ==true && turns >0){
     row.lastElementChild.innerHTML = 0;
     MovesLeft.TwoPairs = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.TwoPairs;
     printMessage("Fail  X");
     console.log("TwoPairs removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    
    }
}
if (row.id==='three-of-a-kind' ) {
                      
    if(turnPhase==3 && availableMoves.Threeofakind !==-1 && MovesLeft.Threeofakind ==true && turns >0){
     score.Threeofakind = availableMoves.Threeofakind; 
     MovesLeft.Threeofakind = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.Threeofakind;
     printMessage("so your collecting Threeofakind now are you ;)");
     console.log("Threeofakind removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    }
    //not end of turn player is just sketching in the scorecard value: 1 or 2
    if(turnPhase<3  && MovesLeft.Threeofakind ==true && turns >0){
     if(availableMoves.Threeofakind ==-1){ row.lastElementChild.innerHTML= "0";}
     else { row.lastElementChild.innerHTML= availableMoves.Threeofakind; }
    
     
    }
    //move not available and will give a penalty
    else if(turnPhase==3  && MovesLeft.Threeofakind ==true && turns >0){
     row.lastElementChild.innerHTML = 0;
     MovesLeft.Threeofakind = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.Threeofakind;
     printMessage("Fail  X");
     console.log("Threeofakind removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    
    }
}
if (row.id==='four-of-a-kind' ) {
    if(MovesLeft.Fourofakind ==true){ 
        if(turnPhase==3 && availableMoves.Fourofakind !==-1 && MovesLeft.Fourofakind ==true && turns >0){
            score.Fourofakind = availableMoves.Fourofakind; 
            MovesLeft.Fourofakind = false; // move has been selected and is no longer available
            row.lastElementChild.innerHTML= score.Fourofakind;
            printMessage("so your collecting Fourofakind now are you ;)");
            console.log("Fourofakind removed");
            turns--;
            endTurn = false; 
            turnPhase = 0;
           }
             //not end of turn player is just sketching in the scorecard value: 1 or 2
        if(turnPhase<3  && MovesLeft.Fourofakind ==true && turns >0){
        if(availableMoves.Fourofakind ==-1){ row.lastElementChild.innerHTML= "0";}
        else { row.lastElementChild.innerHTML= availableMoves.Fourofakind; }
       
        
       }
           //move not available and will give a penalty
           else if(turnPhase==3  && MovesLeft.Fourofakind ==true && turns >0){
            row.lastElementChild.innerHTML = 0;
            MovesLeft.Fourofakind = false; // move has been selected and is no longer available
            row.lastElementChild.innerHTML= score.Fourofakind;
            printMessage("Fail  X");
            console.log("Fourofakind removed");
            turns--;
            endTurn = false; 
            turnPhase = 0;
           }
    }
}
if (row.id==='full-house' ) {
                      
    if(turnPhase==3 && availableMoves.FullHouse !==-1 && MovesLeft.FullHouse ==true && turns >0){
     score.FullHouse = availableMoves.FullHouse; 
     MovesLeft.FullHouse = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.FullHouse;
     printMessage("so your collecting FullHouse now are you ;)");
     console.log("FullHouse removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    }
      //not end of turn player is just sketching in the scorecard value: 1 or 2
      if(turnPhase<3  && MovesLeft.FullHouse ==true && turns >0){
        if(availableMoves.FullHouse ==-1){ row.lastElementChild.innerHTML= "0";}
        else { row.lastElementChild.innerHTML= availableMoves.FullHouse; }
       
        
       }
    //move not available and will give a penalty
    else if(turnPhase==3  && MovesLeft.FullHouse ==true && turns >0){
     row.lastElementChild.innerHTML = 0;
     MovesLeft.FullHouse = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.FullHouse;
     printMessage("Fail  X");
     console.log("FullHouse removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    
    }
}
if (row.id==='small-straight' ) {
                      
    if(turnPhase==3 && availableMoves.Smallstraight !==-1 && MovesLeft.Smallstraight ==true && turns >0){
     score.Smallstraight = availableMoves.Smallstraight; 
     MovesLeft.Smallstraight = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.Smallstraight;
     printMessage("so your collecting Smallstraight now are you ;)");
     console.log("Smallstraight removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    }
    //not end of turn player is just sketching in the scorecard value: 1 or 2
      //not end of turn player is just sketching in the scorecard value: 1 or 2
      if(turnPhase<3  && MovesLeft.Smallstraight ==true && turns >0){
        if(availableMoves.Smallstraight ==-1){ row.lastElementChild.innerHTML= "0";}
        else { row.lastElementChild.innerHTML= availableMoves.Smallstraight; }
       
        
       }
    //move not available and will give a penalty
    else if(turnPhase==3  && MovesLeft.Smallstraight ==true && turns >0){
     row.lastElementChild.innerHTML = 0;
     MovesLeft.Smallstraight = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.Smallstraight;
     printMessage("Fail  X");
     console.log("Smallstraight removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    
    }
}
if (row.id==='large-straight' ) {
                      
    if(turnPhase==3 && availableMoves.Largestraight !==-1 && MovesLeft.Largestraight ==true && turns >0){
     score.Largestraight = availableMoves.Largestraight; 
     MovesLeft.Largestraight = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.Largestraight;
     printMessage("so your collecting Largestraight now are you ;)");
     console.log("Largestraight removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    }
      //not end of turn player is just sketching in the scorecard value: 1 or 2
      if(turnPhase<3  && MovesLeft.Largestraight ==true && turns >0){
        if(availableMoves.Largestraight ==-1){ row.lastElementChild.innerHTML= "0";}
        else { row.lastElementChild.innerHTML= availableMoves.Largestraight; }
       
        
       }
    //move not available and will give a penalty
    else if(turnPhase==3  && MovesLeft.Largestraight ==true && turns >0){
     row.lastElementChild.innerHTML = 0;
     MovesLeft.Largestraight = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.Largestraight;
     printMessage("Fail  X");
     console.log("Largestraight removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    
    }
}
if (row.id==='chance' ) {
                      
    if(turnPhase==3 && availableMoves.Chance !==-1 && MovesLeft.Chance ==true && turns >0){
     score.Chance = availableMoves.Chance; 
     MovesLeft.Chance = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.Chance;
     printMessage("so your collecting Chance now are you ;)");
     console.log("Chance removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    }
      //not end of turn player is just sketching in the scorecard value: 1 or 2
      if(turnPhase<3  && MovesLeft.Chance ==true && turns >0){
        if(availableMoves.Chance ==-1){ row.lastElementChild.innerHTML= "0";}
        else { row.lastElementChild.innerHTML= availableMoves.Chance; }
       
        
       }
    //move not available and will give a penalty
    else if(turnPhase==3  && MovesLeft.Chance ==true && turns >0){
     row.lastElementChild.innerHTML = 0;
     MovesLeft.Chance = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.Chance;
     printMessage("Fail  X");
     console.log("Chance removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    
    }
}
if (row.id==='yatzy' ) {
                      
    if(turnPhase==3 && availableMoves.Yatzy !==-1 && MovesLeft.Yatzy ==true && turns >0){
     score.Yatzy = availableMoves.Yatzy; 
     MovesLeft.Yatzy = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.Yatzy;
     printMessage("so your collecting Yatzy now are you ;)");
     console.log("Yatzy removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    }
      //not end of turn player is just sketching in the scorecard value: 1 or 2
      if(turnPhase<3  && MovesLeft.Yatzy ==true && turns >0){
        if(availableMoves.Yatzy ==-1){ row.lastElementChild.innerHTML= "0";}
        else { row.lastElementChild.innerHTML= availableMoves.Yatzy; }
       
        
       }
    //move not available and will give a penalty
    else if(turnPhase==3  && MovesLeft.Yatzy ==true && turns >0){
     row.lastElementChild.innerHTML = 0;
     MovesLeft.Yatzy = false; // move has been selected and is no longer available
     row.lastElementChild.innerHTML= score.Yatzy;
     printMessage("Fail  X");
     console.log("Yatzy removed");
     turns--;
     endTurn = false; 
     turnPhase = 0;
    
    }
}
console.log("turnphase after " + turnPhase);
printScore();
}

this.throwDices =  function throwDices() {
    if(turnPhase ===3 || 0) { unlockDices();   }
    console.log("turnphase: " + turnPhase);
    ClearPencilledMoves();
    getAvailableMoves(); 

    /**  TurnPhase: 0,1,2     first roll = 0 last = 2**/
    if (turnPhase <3) {
        for (var i = 0; i < 5 ; i++) {
            if (!lockdice[i]) {
                dices[i] = getRandomDice();
               
                
            }
        }
    randomDiceThrow(dices);
    
        
        console.log("dices roll: " + dices[0] + " " +  dices[1] + " " + dices[2] + " "  + dices[3] + " " + dices[4] );
    }
   
    if(turnPhase ==0){
        unlockDices();
        this.printMessage("First Roll");
        turnPhase++;
        audio.play();
        document.getElementById("dice0").innerHTML = this.getDiceImage(dices[0])
        document.getElementById("dice1").innerHTML = this.getDiceImage(dices[1]);
        document.getElementById("dice2").innerHTML = this.getDiceImage(dices[2]);
        document.getElementById("dice3").innerHTML = this.getDiceImage(dices[3]);
        document.getElementById("dice4").innerHTML = this.getDiceImage(dices[4]);

        return null;
    }
    if(turnPhase ==1){
        this.printMessage("Second Roll");
        turnPhase++;
        audio.play();
        document.getElementById("dice0").innerHTML = this.getDiceImage(dices[0]);
        document.getElementById("dice1").innerHTML = this.getDiceImage(dices[1]);
        document.getElementById("dice2").innerHTML = this.getDiceImage(dices[2]);
        document.getElementById("dice3").innerHTML = this.getDiceImage(dices[3]);
        document.getElementById("dice4").innerHTML = this.getDiceImage(dices[4]);
        return null;
    }
    if(turnPhase ==2){
        this.printMessage("Third Roll");
        turnPhase++;
        audio.play();
        document.getElementById("dice0").innerHTML = this.getDiceImage(dices[0]);
        document.getElementById("dice1").innerHTML = this.getDiceImage(dices[1]);
        document.getElementById("dice2").innerHTML = this.getDiceImage(dices[2]);
        document.getElementById("dice3").innerHTML = this.getDiceImage(dices[3]);
        document.getElementById("dice4").innerHTML = this.getDiceImage(dices[4]);
        unlockDices();
        return null;
    }
    if(turnPhase ==3){
        this.printMessage("SELECT MOVE. " + turns + "TURNS LEFT");
    
       endTurn= true;
      
     
      
    }
    else{
        throw 'TurnPhase value incorrect:   ' + turnPhase ;

    }
}
this.update_Ui_dices = function update_Ui_dices(){
    console.log(dices[0]);
    document.getElementById("dice0").innerHTML = this.getDiceImage(dices[0]);
    document.getElementById("dice1").innerHTML = this.getDiceImage(dices[1]);
    document.getElementById("dice2").innerHTML = this.getDiceImage(dices[2]);
    document.getElementById("dice3").innerHTML = this.getDiceImage(dices[3]);
    document.getElementById("dice4").innerHTML = this.getDiceImage(dices[4]);


}
function showAvailableMoves() {
    console.log(availableMoves);
}

function getRandomDice() {
    return Math.floor(Math.random() * 6) + 1;
}
this.addEventListenerToDices = function addEventListenerToDices() {
    
    var element = document.getElementById("dices").firstElementChild;
    element = element.firstElementChild;
    //for (var i = 0; i < hurra.cells.Count; i++) {
    for (var j = 0, col; col = element.cells[j]; j++) {
        //var cellChild = hurra.childNodes[i];
        col.addEventListener("click", function() {
            var dicenumber = this.cellIndex;
            Setlockdice(dicenumber);
        }, false);
    }
}
}
