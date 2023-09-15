//* Given the triangle of consecutive odd numbers: 

//          1
//        3   5
//      7   9   11
//   13  15   17  19
// 21  23   25   27  29  

// function rowSumOddNumbers(n) {
//  // TODO
//   let res=0;
//   for(i = n; i > 0; i--){
//     res = res + (n * (n-1) + 1) + ((i-1) * 2)
//   }

//   return res;
// }

let rowSumOddNumbers = (n) => Math.pow(n, 3);


//======//

let res = rowSumOddNumbers(3)
console.log(res)