//Sum of Cubes - https://www.codewars.com/kata/59a8570b570190d313000037/

//Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

function sumCubes(n){
  //   return eval(Array(n).fill(1).map((item=1,index)=> (index + item)**3 ).join('+'))
    return Array(n).fill(1).reduce((acc, cur, idx)=> acc + (cur + idx) ** 3, 0)
  }
  
  function sumCubes(n) {
    return (n * (n + 1) / 2) ** 2;
  }
  
  
  const sumCubes = n => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);
  
  let sumCubes=n=>n<2?1:n**3+sumCubes(n-1)