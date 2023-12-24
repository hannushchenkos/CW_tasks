//Tribonacci Sequence - https://www.codewars.com/kata/556deca17c58da83c00002db/
//Well met with Fibonacci bigger brother, AKA Tribonacci.

//As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
//So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
//[1, 1 ,1, 3, 5, 9, 17, 31, ...]

function tribonacci(signature,n){
  let idx = 0;
  while(signature.length <n){
    signature.push([...signature].splice(idx, idx+3).reduce((acc, cur)=>acc+=cur, 0))
    idx++;
  }
  return n === 0 ? [] : n < 3 ? signature.splice(0, n) : signature;
}


function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}