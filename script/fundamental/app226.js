// Highest and Lowest - https://www.codewars.com/kata/554b4ac871d6813a03000035

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  let arr = numbers.split(' ').map(item=>+item).sort((a,b)=> b-a)
  return [arr[0],arr[arr.length-1]].join(' ')
//   return [Math.max(...arr),Math.min(...arr)].join(' ')
}

//function highAndLow(numbers){
//  numbers = numbers.split(' ');
//  return `${Math.max(...numbers)} $
//{Math.min(...numbers)}`;
//}

// function highAndLow(numbers){
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }