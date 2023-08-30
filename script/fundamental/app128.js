// https://www.codewars.com/kata/57a5c31ce298a7e6b7000334/

// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
  return +bin === 0 ? 0 : bin.split("").map((item, index)=> (index === bin.length - 1 && +item === 1) ? 1 : + item * (Math.pow(2, bin.length - index - 1))).reduce((acc, cur)=> acc += cur, 0)
}

console.log(binToDec("0"));

// function binToDec(bin){
//   return parseInt(bin,2);
// }

// binToDec=n=>parseInt(n,2)

// const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);

// function binToDec(bin){
//   return bin.split("").reverse().map(function(a,b){return Number(a) * Math.pow(2,b)}).reduce(function(a,b){return a+b});
// }

// function binToDec(bin){
//   return bin.split('')
//     .reverse()
//       .map((x,i)=>x==1?Math.pow(2,i):0)
//         .reduce((a,b)=>a+b,0);
// }

// binToDec = s => '0b'+s-0