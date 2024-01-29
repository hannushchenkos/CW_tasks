// Is there a vowel in there? - https://www.codewars.com/kata/57cff961eca260b71900008f/train

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


function isVow(a){
  let letters = ['a', 'e', 'i', 'o', 'u']
  return a.map((item,idx,arr)=> letters.includes(String.fromCharCode(item)) ? String.fromCharCode(item) : item)
}


const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)


function isVow(a){
  return a.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x);
}
