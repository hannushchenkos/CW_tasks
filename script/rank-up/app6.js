//* Complete the solution so that the function will break up camel casing, using a space between words.
// Example "camelCasing"  =>  "camel Casing"

// ^[A-Za-z]*$  

function solution(string) {
  return string.split("").map((item, index)=>{ return a = item.match(/[A-Z]/g) ? item = " "+item : item = item}).join("")
}

// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));
// }

// function solution(text) {
//   return text.split(/(?=[A-Z])/).join(' ');
// }

let res = solution("camelCasing")
console.log(res)
