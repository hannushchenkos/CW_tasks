// https://www.codewars.com/kata/5aff237c578a14752d0035ae/

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

//     Take a list of ages when each of your great-grandparent died.
//     Multiply each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.


function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  return Math.floor(Math.sqrt([age1,age2,age3,age4,age5,age6,age7,age8].map(item => item * item).reduce((acc, cur) => acc+=cur, 0))/2)
}

// const predictAge = (...ages) => Math.hypot(...ages) / 2 | 0;

// function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
//   let sum = [...arguments]
//     .map(x=>x**2)
//     .reduce((sum,v)=>sum+v,0)
//   return Math.floor( Math.sqrt(sum)/2 )
// }

// function predictAge(...n){
//   return (Math.hypot(...n)/2)>>0 
// }

// function predictAge(...a){
//   return ~~(a.reduce((a,x)=>a+x*x,0)**0.5/2)
// }

// const predictAge = (...args) =>
//   Math.hypot(...args) >> 1;

// let predictAge =(...a)=> Math.hypot(...a)>>1