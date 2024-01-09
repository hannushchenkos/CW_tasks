// Convert an array of strings to array of numbers - https://www.codewars.com/kata/5783d8f3202c0e486c001d23

function toNumberArray(stringarray){
  return stringarray.map(item=>+item)
}

const toNumberArray = stringarray => stringarray.map(Number);

function toNumberArray(stringarray){
  return stringarray.map(parseFloat);
}