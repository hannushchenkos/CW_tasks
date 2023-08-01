// https://www.codewars.com/kata/56b1f01c247c01db92000076

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

let doubleChar = (str) => str.split("").map(item => item.repeat(2)).join("")

console.log(doubleChar('text'));

// const doubleChar = str =>  str.replace(/./g, `$&$&`);
