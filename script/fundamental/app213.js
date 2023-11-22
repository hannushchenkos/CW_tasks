// Sum without highest and lowest number - https://www.codewars.com/kata/576b93db1129fcf2200001e6

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.



function sumArray(a) {
  console.log(a)
  return Array.isArray(a) && a.length > 2 ? a.sort((a,b)=>a-b).slice(1,-1).reduce((acc, cur, idx) => acc += cur ) : 0;
}

// function sumArray(a) {
//   console.log(a)
//   return Array.isArray(a) && a.length > 2 ? a.reduce((acc, cur) => acc += cur, 0)- Math.min(...a) - Math.max(...a) : 0;
// }

// sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

// function sumArray(array) {
//   return Array.isArray(array) && array.length > 1
//     ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
//     : 0
// }