// https://www.codewars.com/kata/524f5125ad9c12894e00003f/

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(n, m){
  return Math.max(...[n, m]) % Math.min(...[n, m]); 
}

// function remainder(a, b){
//   return a > b ? a % b : b % a;
// }