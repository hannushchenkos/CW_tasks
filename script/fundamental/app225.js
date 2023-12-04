// Maximum Product - https://www.codewars.com/kata/5a4138acf28b82aa43000117

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
  return Math.max(...array.reduce((acc, cur, index)=> [...acc, cur * array[index-1]] ,[]).filter(item => !isNaN(item)))
}

// function adjacentElementsProduct(a) {
//   return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
// }

// function adjacentElementsProduct(array) {
//   let max = -Infinity;
//   for (let i = 0; i < array.length -1; i++) {
//     if (array[i] * array[i + 1] > max) max = array[i] * array[i + 1];
//   }
//   return max;
// }

// const adjacentElementsProduct = (array) => array.slice(1).reduce(
//   (max, cur, i) => Math.max(array[i] * cur, max), -Infinity
// );