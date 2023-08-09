// https://www.codewars.com/kata/57fae964d80daa229d000126/

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples

// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"


// function remove (string) {
//   return string.replace(/[!.]/g, '');
// }

function remove (string) {
    return string[string.length - 1] === '!' ? string.slice(0, string.length - 1) : string;
  }
  
  //const remove = s => s.replace(/!$/, '');
  
  //function remove(s) {
  //  return s.endsWith('!') ? s.slice(0, -1) : s;
  //}
  
  //function remove(s){
  //  return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
  //}