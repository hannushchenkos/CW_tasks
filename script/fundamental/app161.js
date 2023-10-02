// https://www.codewars.com/kata/5641a03210e973055a00000d

// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34

// function twoDecimalPlaces(n) {
//   n = `${n}`.split('.')
//   n[1] = `${n[1]}`.slice(0,3).split('')
//   n[1][2] >= n[1][1] === 9 ? 5 ? (n[1][1]++)+'' : n;
//   n[1].splice(2,1)
//   console.log(n[1])
//   n[1] = n[1].join('')
//   console.log(n)
//   return Number(n.join('.'))
// }

function twoDecimalPlaces(n) {
    return Number(n.toFixed(2))
}

// function twoDecimalPlaces(n) {
//     return Math.round(n*100)/100;
//   }