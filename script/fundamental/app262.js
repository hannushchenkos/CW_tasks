// Blue and red marbles - https://www.codewars.com/kata/5862f663b4e9d6f12b00003b/

// calculate whether you should guess "blue" or "red". The function should take four arguments:

//     the number of blue marbles you put in the bag to start
//     the number of red marbles you put in the bag to start
//     the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
//     the number of red marbles pulled out so far (always lower than the starting number of red marbles)

// guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.

function guessBlue(bS, rS, bP, rP) {
    return (bS - bP) / ((bS - bP) + (rS - rP))
  }

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    var blueLeft = blueStart - bluePulled;
    var redLeft = redStart - redPulled;
    var allLeft = blueLeft + redLeft;
    
    return blueLeft/allLeft;
}