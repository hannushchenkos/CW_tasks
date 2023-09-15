// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/

// Is the string uppercase?
// Task

// Create a method to see whether the string is ALL CAPS.
// Examples (input -> output)

// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


String.prototype.isUpperCase = function() {
    return this.replace(/\s/g, "").length === this.replace(/\s/g, "").split("").reduce((acc, cur) => cur.match(/[A-Z]|[.,#]/g) ? acc+=1 : acc, 0)
}

// String.prototype.isUpperCase = function() {
//     return this == this.toUpperCase()
// }

// String.prototype.isUpperCase = function () {
//     return !/[a-z]/.test(this);
// };

// String.prototype.isUpperCase = function(){
//     return /^[^a-z]+$/.test(this)
//   }

// String.prototype.isUpperCase = function() {
//     return this.toUpperCase() === this.toString();
// }

console.log("BOB WALKS HIS DOG EVERY DAY.".isUpperCase());