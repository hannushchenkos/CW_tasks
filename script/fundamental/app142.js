// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/

// Write a function that removes the spaces from the string, then return the resultant string.

const noSpace = (x) => x.replace(/ /g, '')

// const noSpace = (x) => x.split(" ").join('')

// function noSpace(x) {
//   return x.replaceAll(' ', '');
// }

// const noSpace = (str) => str.replace(/\s*/g, '');