// Alternate case - https://www.codewars.com/kata/57a62154cf1fa5b25200031e

//Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

function alternateCase(s) {
  return [...s].map(item=> item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()).join('')
}

const alternateCase = str => str.replace(/./g, ch => ch[`to${/[A-Z]/.test(ch) ? 'Low' : 'Upp'}erCase`]()); 


function alternateCase(s) {
  return s.replace(/([a-z])|[A-Z]/g,(a,b)=>b?a.toUpperCase():a.toLowerCase());
}


const swapCase = x => x===x.toUpperCase()?x.toLowerCase():x.toUpperCase()
const alternateCase = s => s.replace(/./gi, swapCase )
