


function straight(dicesArray){
    //put the dice throw in ascending order
    dicesArray.sort();
    //check there is an ascending sequence of 4 numbers
    let prevNum = dicesArray[0];
    // check small straight in first 4 numbers
    for(i = 1; i < 5; i++){
        if(dicesArray[i] - prevNum == 1){
            prevNum = dicesArray[i];
            if (i == 4){
                return true;
            }
        }
        else{
            //makes sure to exit the loop ;)
            break;
        }
    }
 
    return false;
}

module.exports = straight;