// Tidy Number - https://www.codewars.com/kata/5a87449ab1710171300000fd

// A Tidy number is a number whose digits are in non-decreasing order.

function tidyNumber(n){
  return `${n}` === [...`${n}`].sort().join('')
}
