// https://www.codewars.com/kata/56efc695740d30f963000557/

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

// As usual, your function/method should be pure, i.e. it should not mutate the original string.

String.prototype.toAlternatingCase = function () {
    let str = this;
    return str.split("").map(item => item.match(/[a-z]/g) ? item.toUpperCase() : item.toLowerCase()).join("")
}
  

//   String.prototype.toAlternatingCase = function () {
//       return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
//   }
  

//   String.prototype.toAlternatingCase = function () {
//     return this.replace(/./g, function (match) {
//       return /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase();
//     });
//   }
  

//   const isLowerCase = (char) => char.toLowerCase() === char;
//   const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();
//   String.prototype.toAlternatingCase = function() {
//     return [...this].map(swapCase).join('');
//   };