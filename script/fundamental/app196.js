// Move all of the zeros to the end - https://www.codewars.com/kata/52597aa56021e91c93000cb0/

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let count = 0;
  let result = arr.reduce((acc, cur, idx)=>{
    cur === 0 ? count++: count;
    return cur !== 0 ? [...acc, cur] : acc}, [])
  return [...result, ...Array(count).fill(0)]  
}

// let moveZeros = (arr) => arr.reduceRight((acc, curr) => {
//     return curr === 0 ? [...acc, curr] : [curr, ...acc]
// }, [])

// var moveZeros = function (arr) {
//   return [
//     ...(arr.filter(n => n !== 0)),
//     ...(arr.filter(n => n === 0))
//   ];
// }

// var moveZeros = function (arr) {
//   return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }

// var moveZeros = function (arr) {
//   let result = arr.filter(c => c !== 0)
//   let count = arr.length - result.length
  
//   return result.concat(Array(count).fill(0))
// }
