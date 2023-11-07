// Replace letter with its position - https://www.codewars.com/kata/546f922b54af40e1e90001da

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  return text.toLowerCase().split('').filter((item)=>item.match(/([a-z])(?!.*\1)/ig)).map(item => item.charCodeAt(0)-96).join(' ');
}


// let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

// function alphabetPosition(text) {
//   var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//   return text.toLowerCase().replace(/[^a-z]/g,'').split('').map(x => alphabet.indexOf(x)+1).join(' ');
// }
