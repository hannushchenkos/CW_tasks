// Anagram Detection - https://www.codewars.com/kata/529eef7a9194e0cbc1000255
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"


let breakWord = word => word.toLowerCase().split('').sort().join('')

var isAnagram = function(test, original) {
  return breakWord(test) === breakWord(original)
};

const isAnagram = (test, original) =>
  (fn => fn(test) === fn(original))
  (val => [...val.toLowerCase()].sort().join(``));