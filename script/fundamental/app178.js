// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/

// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move (position, roll) {
    return position + roll * 2
  }
  
//   function move (position, roll) {
//     // return the new position
//     return roll >= 1 && roll <= 6 ? roll * 2 + position : null;
//   }
  