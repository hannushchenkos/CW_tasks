// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/

// Given a string str, reverse it and omit all non-alphabetic characters.

const reverseLetter = (str) => str.split("").map(item => item.match(/[a-z]/ig)).reverse().join("")

// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/

// Given a string str, reverse it and omit all non-alphabetic characters.

// const reverseLetter = (str) => str.split("").map(item => item.match(/[a-z]/ig)).reverse().join("")

// const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');