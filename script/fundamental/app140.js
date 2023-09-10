// https://www.codewars.com/kata/57eaeb9578748ff92a000009/

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

let sumMix = (x) => eval(x.join('+'))

// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
//   }

// const sumMix=x=>x.reduce((a,b)=>+b+a,0)

