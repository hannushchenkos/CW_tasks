// Divide and Conquer - https://www.codewars.com/kata/57eaec5608fed543d6000021

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// Return as a number.

function divCon(x){
  return x.reduce((acc, cur)=>typeof cur === 'number' ? acc+=cur : acc-=+cur, 0 )
}
