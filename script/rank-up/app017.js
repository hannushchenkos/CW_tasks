// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.


function solve(s){
  let sArr = s.split("")
//   console.log(sArr);
  const LOWER = sArr.reduce((acc, cur)=>cur !== cur.toUpperCase() ? acc+=1 : acc, 0)
  const UPPER = sArr.reduce((acc, cur)=>cur !== cur.toLowerCase() ? acc+=1 : acc, 0)
//   console.log(`lower: ${LOWER} upper: ${UPPER}`);
  return LOWER == UPPER || LOWER > UPPER ? sArr.map(item => item.toLowerCase()).join("") : 
  sArr.map(item => item.toUpperCase()).join("")
}

// function solve(s){
//   return [...s].reduce((t,c)=>t+/[a-z]/.test(c)*2,0)<s.length?s.toUpperCase():s.toLowerCase();
// }

// const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()

// function solve(s){
//   let upper = s.split('').filter(x => x === x.toUpperCase()).length
//   let lower = s.length - upper
//   return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
// }