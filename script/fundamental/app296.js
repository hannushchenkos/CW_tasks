// Power of two - https://www.codewars.com/kata/534d0a229345375d520006a0/

// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

//     a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

function isPowerOfTwo(n){
  let checkArr = Array(100).fill(2).map((item,idx)=>Math.pow(item,idx+1))
  console.log(checkArr, n)
//   let res = true;
//   while(n !== 1 && n%2 !== 0 && res === true){
//     n = n/2
//     res = false;
//   }
//   return res
  return checkArr.includes(n) || n === 1
}


function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
    
}

function isPowerOfTwo(n) {
  return n === 0 ? false : (n & (n - 1)) == 0
}


function isPowerOfTwo(n){
  if(n<2) return false;
  if(n==2) return true;
  if(n>2) return isPowerOfTwo(n/2);
}