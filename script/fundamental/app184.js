// https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// function remove (string) {
//   let answer = string.split('').reverse().filter((item, index) => {
//     return item === '!' ? index !== 0 ? '' : item : item }).reverse().join('')
//   return answer;  
// }

function remove (string) {
  return string.replaceAll('!', '')+'!';
}

// function remove (string) {
//   let answer = string.split('').reverse().filter((item, index) => {
//     return item === '!' ? index !== 0 ? '' : item : item }).reverse().join('')
//   return answer;  
// }

// function remove (string) {
//   return string.replaceAll('!', '')+'!';
// }