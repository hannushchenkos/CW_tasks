// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// Rules

//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat


function wave(str){
  let arr = [];
  for(let i = 0; i < str.length; i++){
      if(str.toLowerCase()[i].match(/[a-z]/g)){
          let tempWord = str.toLowerCase().split('');
          tempWord[i] = tempWord[i].toUpperCase();
          tempWord = tempWord.join("")
          arr.push(tempWord);
      }else{
          arr.pop[i]
      }
  }
  return arr
}

// function wave(str){
//   let result = [];
  
//   str.split("").forEach((char, index) => {
//       if (/[a-z]/.test(char)) {
//           result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
//       }
//   });
  
//   return result;
// }

// var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)

// const wave = str => 
// [...str].map((s, i) => 
//     str.slice(0, i) + s.toUpperCase() + str.slice(i + 1) 
// ).filter(x => x != str);

// const wave = s => Array.from( s, (_,i) => /\s/.test(s[i]) ? null : s.slice(0,i) + s[i].toUpperCase() + s.slice(i+1) ).filter(Boolean) ;