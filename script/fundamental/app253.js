// Simple beads count - https://www.codewars.com/kata/58712dfa5c538b6fc7000569/

// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

function countRedBeads(n) {
  return n < 2 ? 0 : (n-1)*2
}

const countRedBeads = n =>
  n && --n * 2;

const countRedBeads = n => ((n || 1)-1)*2
