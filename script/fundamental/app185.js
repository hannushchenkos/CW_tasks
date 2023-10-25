// Return last n even numbers - https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  let res = array.reverse().reduce((acc, cur, idx) => {
    return acc.length <= number-1 ? cur%2 === 0 ? [cur, ...acc] : acc : acc 
  } , [])
  
  return res;
}

// const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);

// const evenNumbers = (array, number) => array.filter(val => !(val & 1)).slice(-number);