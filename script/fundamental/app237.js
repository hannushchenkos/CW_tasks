// Most digits - https://www.codewars.com/kata/58daa7617332e59593000006/

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  const lenArr = array.map(item => `${item}`.length)
  let longestIdx = lenArr.indexOf(Math.max(...lenArr))
  return array[longestIdx]
}


const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);

function findLongest(array){
  return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
}
