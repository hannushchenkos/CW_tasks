// Reverse every other word in the string - https://www.codewars.com/kata/58d76854024c72c3e20000de/

//Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){
  console.log(str)
  return /^\s*$/.test(str) ? '' : str.split(' ').map((word,idx) => idx % 2 === 1 ? [...word].reverse().join('') : word).join(' ')
}


const reverse =s=> s.replace( /(\S+ )(\S+)/g, (_,a,b)=>a+[...b].reverse().join('') ).trim()