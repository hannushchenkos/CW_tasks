//Sum of Multiples - https://www.codewars.com/kata/57241e0f440cd279b5000829/

//Find the sum of all multiples of n below m

//	n and m are natural numbers (positive integers)
//	m is excluded from the multiples

function sumMul(n,m){
  return (n > 0 && m > 0 && m > n) ? Array(Math.floor(m/n)).fill(n).map((item,index) => n*(index+1)).reduce((acc,cur)=> cur != m ? acc += cur : acc, 0) : 'INVALID'
}

// function sumMul(n,m){
//   if(n < 0 || m < 0 || m >= n){return 'INVALID'}else{
//       let arr = [];
//     while(n > 0 && m > 0 && m > n){
//       if(m%n === 0){arr.push(n)};
//       n++;
//     }
//       return arr != 0 ? arr : 'INVALID';
  
//   }
// }