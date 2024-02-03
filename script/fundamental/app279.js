// Pillars - https://www.codewars.com/kata/5bb0c58f484fcd170700063d/

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

//     number of pillars (≥ 1);
//     distance between pillars (10 - 30 meters);
//     width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


function pillars(n, d, w) {
  return n === 1 ? 0 : w * (n - 2) + d * (n - 1) * 100
}