// Do you speak English? - https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
  return (/english/gi).test(sentence)
}

function spEng(sentence){
  return sentence.toLowerCase().includes('english')
}

function spEng(sentence){
  return sentence.toLowerCase().split('english').length > 1 ? true : false;
}

function spEng(sentence){
  return Array.isArray(sentence.match(/english/gi));
}

function spEng(sentence){
  return sentence.toLowerCase().indexOf('english') !== -1;
}

// function spEng(s){
//   return /english/i.test(s)
// }