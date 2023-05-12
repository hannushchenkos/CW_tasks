//*Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// *Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
  let res = 0;
  arr.forEach((item, index)=>{
    res += (item * Math.pow(2, arr.length-index-1));
    console.log(res);
  })
  return res;
};
/*!===================*/

// function addBinary(a,b){
//   return (a+b).toString(2)
// }

/*===================*/
let res = binaryArrayToNumber([1,1,0,0,0])
console.log(res)