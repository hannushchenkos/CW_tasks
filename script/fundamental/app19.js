//Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  return str.split("").filter(item => !item.match(/^[aeiou]$/ig)).join("");
}

//function disemvowel(str) {
//  return str.replace(/[aeiou]/gi, '');
//}

//Attempt to solve without regEx
// function disemvowel(str) {
//   const checkStr = "aeiou".split("");
//   let modStr = str.split("").filter((letter)=>{
//     for(check in checkStr){
//       if (!letter.includes(check)){
//         return true;
//       }else{
//         continue;
//       }
//     }
//   })
//   return modStr.join("");
// }

console.log(disemvowel('This website is for losers LOL!'));