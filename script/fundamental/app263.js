// Simple remove duplicates - https://www.codewars.com/kata/5ba38ba180824a86850000f7/

// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
// Example:

// For input: [3, 4, 4, 3, 6, 3]

//     remove the 3 at index 0
//     remove the 4 at index 1
//     remove the 3 at index 3

// Expected output: [4, 6, 3]

// More examples can be found in the test cases.

// Good luck!


function solve(arr) {
  return Array.from(new Set(arr.reverse())).reverse();
}

// 7 2 1 4 4 7 5 1
// 1 5 7 4 4 1 2 7
// 1 5 7 4 2
// 2 4 7 5 1


function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}


const solve = arr => [...new Set(arr.reverse())].reverse()