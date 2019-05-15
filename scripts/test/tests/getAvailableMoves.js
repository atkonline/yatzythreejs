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