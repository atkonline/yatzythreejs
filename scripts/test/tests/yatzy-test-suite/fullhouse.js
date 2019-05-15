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
    let num = dicesArray[i];    let maxdicecount = 5;
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


// let testit = fullhouse([0,1,2,3,4]);
// console.log("result of not a fullhouse should return false :: result:  " +  testit);


// let truetest = fullhouse([1,1,2,2,2]);
// console.log(truetest);


module.exports = fullhouse;