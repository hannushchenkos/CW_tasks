// Count of positives / sum of negatives - https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  //    let accum = [0, 0]
  //    return input.reduce((acc,cur)=> cur > 0 ? acc[0]+=1 : acc[1]+=cur , [...accum])
    console.log(input)
     return input == false || input == null  ? [] : [input.reduce((acc,cur)=> cur > 0 ? acc+=1 : acc, 0), input.reduce((acc,cur)=> cur < 0 ? acc+=cur : acc, 0),]
     
  }

//   function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

// function countPositivesSumNegatives(input) {
//   if (!Array.isArray(input) || !input.length) return [];
//   return input.reduce((arr, n) => {
//     if (n > 0) arr[0]++;
//     if (n < 0) arr[1] += n;
//     return arr;
//   }, [0, 0]);
// }

// function countPositivesSumNegatives(input) {
//   return input && input.length ? input.reduce(function(p, c, i, s){
//     c <= 0 ? p[1] += c : p[0] += 1;
//     return p;
//   }, [0, 0]) : [];
// }