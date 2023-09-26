//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  let set = new Set((s1 + s2).split("").sort())
  return [...set].join("")
}

//const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

//function longest(s1, s2) {
//  return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
//}