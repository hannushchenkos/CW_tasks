// Currying functions - https://www.codewars.com/kata/586909e4c66d18dd1800009b/

// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array. 

const multiplyAll = arr => n => arr.map(x => n * x);