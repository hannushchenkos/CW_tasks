// Check if two given characters are the same case - https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/

// Write a function that will check if two given characters are the same case.

//     If either of the characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters, but not the same case, return 0

// Examples

// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1


function lower(letter){
  return letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123;
}

function upper(letter){
  return letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91;
}

function checValid(symbol){
  return (/[a-zA-Z]/).test(symbol)
}

function sameCase(a, b){
  console.log(checValid(a))
  console.log(checValid(b))
  return checValid(a) && checValid(b) ? lower(a) && lower(b) ? 1 : upper(a) && upper(b) ? 1 : 0 : -1
}

// sameCase = (a,b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1


// function sameCase(a, b){
//   if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false) return -1;
//   if (a === a.toUpperCase() && b !== b.toUpperCase()) return 0;
//   if (a !== a.toUpperCase() && b === b.toUpperCase()) return 0;
//   return 1;
// }


// function sameCase(a, b){
//     const alpha = 'abcdefghijklmnopqrstuvwxyz'
//     if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
    
//     const checkCase = x => {
//       if(x === x.toLowerCase()) return 'lower'
//       if(x === x.toUpperCase()) return 'upper'
//     }
  
//     return checkCase(a) === checkCase(b) ? 1 : 0
//   }
