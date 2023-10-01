// https://www.codewars.com/kata/55d277882e139d0b6000005d/

// Find the mean (average) of a list of numbers in an array.

var findAverage = (n) => n.reduce((acc, cur) => acc += cur, 0) / n.length

