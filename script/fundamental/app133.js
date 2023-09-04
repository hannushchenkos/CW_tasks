// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

const distinct = (a) => Array.from(new Set(a))

// function distinct(a) {
//     return [...new Set(a)];
//   }

// function distinct(arr) {
//     let res = []; 
    
//     for(let i = 0; i < arr.length; i++){
//       if(!res.includes(arr[i])){
//         res.push(arr[i]);
//       }
//   }
//   return res;
//   }

// const distinct = a => a.filter((item, index) => a.indexOf(item) === index);