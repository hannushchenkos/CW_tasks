// Sum the differences - https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/

// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).


// function sumOfDifferences(arr) {
//   let i = arr.length - 1;
//   let sum = 0;
//   while(i > 0){
//     sum += (arr[i] - arr[i-1])
//     i--;
//   }
//   return sum
// }

function sumOfDifferences(arr){
  console.log(arr.reverse())
  return arr.sort((a, b) => b - a).reduce((acc, cur, idx)=>{
    idx>0 ? acc += (arr[idx-1]-arr[idx]): acc;
    console.log(acc)
    return acc;
  }, 0)
}

// function sumOfDifferences(arr) {
//     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }
