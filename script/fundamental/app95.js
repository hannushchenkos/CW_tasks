// https://www.codewars.com/kata/539ee3b6757843632d00026b/

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = (word) => word.split('').map((letter, index) => letter.match(/[A-Z]/g) ? index : -1).filter(item => item > -1)

//var capitals = function (word) {
//  return word.split('').reduce(function(n, l, i){
//    return /[A-Z]/.test(l) && n.push(i), n;
//  }, []);
//};

console.log(capitals('LoloHowAreyour'));