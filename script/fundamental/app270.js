// Ordered Count of Characters - https://www.codewars.com/kata/57a6633153ba33189e000074

// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

let orderedCount = function (text) {
  let modArr = Array.from(new Set([...text]))
  return modArr.map(item => [item, text.split(item).length-1]);
}

// let orderedCount = s =>
//   Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));

// let orderedCount = str => [...new Set([...str])].map(char => [char, str.split(char).length - 1])


// var orderedCount = function (text) {
//   return Array.from(new Set(text)).map(c => [c, text.match(new RegExp(c, 'g')).length]);
// }