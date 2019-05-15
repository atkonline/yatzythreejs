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



function fullhouse(dicesArray){
    if(!Array.isArray(dicesArray)){
        throw new Error("dicesArray must be an array");
    }
    DicesCountArray = [0,0,0,0,0];
    for(i = 0; i<dicesArray.length; i++){
        if(dicesArray[i] === 0){
            DicesCountArray[0] += 1; 
        }
        if(dicesArray[i] === 1){
            DicesCountArray[1] += 1; 
        }
        if(dicesArray[i] === 2){
            DicesCountArray[2] += 1; 
        }
        if(dicesArray[i] === 3){
            DicesCountArray[3] += 1; 
        }
        if(dicesArray[i] === 4){
            DicesCountArray[4] += 1; 
        }
    }
    let maxdicecount = 5;
    let validateDiceCount = 0;
    for(i = 0; i < DicesCountArray.length; i++){
        validateDiceCount += DicesCountArray[i];
    }
    if(maxdicecount != validateDiceCount){
        throw new Error("invalid number of dices:: " + validateDiceCount + " max dices::  "  + maxdicecount);
    }
    /*   If there are two pairs and three of the same they will always add up to five in dicesCountArray   */
    if(validateDiceCount == 5){
        return true
    }
    else {
        return false;
    }
}