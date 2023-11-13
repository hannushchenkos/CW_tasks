// Multiplication table - https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/

// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

let multiplicationTable = function(size) {
  return Array(size).fill()
    .map((row,r_idx)=>Array(size).fill(1)
         .map((item,c_idx)=>item=item*(r_idx+1)*(c_idx+1)))
}

// multiplicationTable = function(size) {

//   return Array.apply(null, new Array(size)).map(function(val, i) {
//     return Array.apply(null, new Array(size)).map(function(val, j) {
//       return (i+1) * (j+1);
//     });
//   });
// }

// multiplicationTable = function(n) {
//   return Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>(i+1)*(j+1)))
// }

// const multiplicationTable=s=>Array(s).fill().map((a,i)=>Array(s).fill().map((e,j)=>(1+i)*(1+j)))