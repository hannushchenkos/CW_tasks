// https://www.codewars.com/kata/55ecd718f46fba02e5000029/ 

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  let arr = [];
  while (b>=a){
    arr.push(b)
    b--
  }
  return arr.reverse();
}

// const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

// const between = (a, b) =>
//   [...Array(b - a + 1)].map((_, idx) => idx + a);