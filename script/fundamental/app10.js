//* Example: ['abc', 0, 2, 3, 'af'] => [0, 2, 3]

function solution(arr){return arr.filter( item =>  typeof item === 'number')}

/*===================*/
let res = solution(['abc', 0, 2, 3, 'af'])
console.log(res)