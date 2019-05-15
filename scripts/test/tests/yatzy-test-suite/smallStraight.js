


function smallStraight(dicesArray){
    //put the dice throw in ascending order
    dicesArray.sort();
    //check there is an ascending sequence of 4 numbers
    let prevNum = dicesArray[0];
    // check small straight in first 4 numbers
    for(i = 1; i < 4; i++){
        if(dicesArray[i] - prevNum == 1){
            prevNum = dicesArray[i];
            if (i == 3)
            return true;
        }
    }
    //check small straight in the last 4 numbers
    prevNum = dicesArray[1];
    for(i = 2; i < 5; i++){
        if(dicesArray[i] - prevNum == 1){
            prevNum = dicesArray[i];
            if (i == 4)
            return true;
        }
    }

}
module.exports = smallStraight;