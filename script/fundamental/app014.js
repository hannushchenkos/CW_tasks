// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  arr.forEach(item => item > 0 ? sum += item : sum)
  return sum;
}

// function positiveSum (arr) {
//  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
// }

console.log(positiveSum([1,5,-2,3]));