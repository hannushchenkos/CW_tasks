// https://www.codewars.com/kata/59cfc000aeb2844d16000075

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
    let arr = s.toLowerCase().split("");
    let first = arr.map((item, index) => index % 2 === 0 ? item.toUpperCase() : item).join("")
    let second = arr.map((item, index) => index % 2 === 1 ? item.toUpperCase() : item).join("")
    return [first, second];
  };
  
//   function capitalize(s){
//     return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
//   };
  
//   function capitalize(s){
//     return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
//             [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
//   }
  
//   capitalize = s =>
//     [
//       [...s].map((l,i)=>i%2?l.toLowerCase():l.toUpperCase()).join(''),
//       [...s].map((l,i)=>i%2?l.toUpperCase():l.toLowerCase()).join('')
//     ]