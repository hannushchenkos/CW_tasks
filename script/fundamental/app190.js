
// Factorial - https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).


// function factorial(n)
// {
//   return n === 0 ? 1 : n >= 12 || n < 0 ? throw RangeError() : Array(n).fill(1).map((item, index)=> item * index+1).reduce((acc,cur)=> {console.log(cur);return acc*=cur}, 1)
// }

function factorial(n)
{
  if(n > 12 || n < 0){throw RangeError();}
  else if(n>=0 && n<=12){
    return n === 0 ? 1 : Array(n).fill(1).map((item, index)=> item * index+1).reduce((acc,cur)=> {console.log(cur);return acc*=cur}, 1)
  }
}

// function factorial(n) {
//   if (n < 0 || n > 12)
//     throw new RangeError();
//   return n <= 1 ? 1 : n * factorial(n - 1);
// }
