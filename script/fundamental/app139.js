// https://www.codewars.com/kata/57a049e253ba33ac5e000212

// Your task is to write function factorial.

function factorial(n){
	let arr = new Array(n).fill(0).map((item, index) => index+1).reduce((acc, cur)=> acc * cur, 1)
	return arr
  }

//   const factorial = n => n ? factorial(n - 1) * n : 1;

// function factorial(n){
// 	return n ? n * factorial(n-1) : 1;
//   }

// function factorial(n){
// 	if ( n === 0 ) return 1
// 	return Array.from({length: n}, (_, i)=> i+1).reduce((a, b)=> a * b, 1)
//   }