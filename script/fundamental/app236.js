// Find the stray number - https://www.codewars.com/kata/57f609022f4d534f05000024 

// ou are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

function stray(numbers) {
  //   return +[...numbers.sort((a,b)=>a-b)].join().replaceAll(/,/g, '')
    return numbers.sort((a,b)=>a-b)[0] === numbers[1] ? numbers[numbers.length-1] : numbers[0]
  }
  
  function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
  }
  
  const stray = nums => nums.reduce((a, b) => a ^ b);
  
  const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));