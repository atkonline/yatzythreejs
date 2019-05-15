function yatzy(dicesArray){
    let last = dicesArray[0];
    
    for(i = 1; i < dicesArray.length; i++){
        
        if(dicesArray[i] == last){
            
            last = dicesArray[i];

            if(i === 4){
                return true;
            }
        }
    }
}
module.exports = yatzy;