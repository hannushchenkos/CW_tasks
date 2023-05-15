//* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function getSum(a, b){
  let res=0;
  for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
    res += i;
  }; 
  return res;
}

// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
//   }


/*===================*/
let res = getSum(0, 3)
console.log(res)