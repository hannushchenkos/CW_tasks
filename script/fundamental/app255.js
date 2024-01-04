// Minimize Sum Of Array - https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// Notes

//     Array/list will contain positives only .
//     Array/list will always have even size

// function minSum(arr, modArr = []) {
//   arr.sort((a,b)=>a-b)
//   while(arr.length>1){
//     modArr.push(arr.shift() * arr.pop())
//   }
//   return modArr.reduce((acc, cur)=> acc+=cur, 0)
// }

function minSum(arr, modArr = []) {
  arr.sort((a,b)=>a-b)
  if(arr.length){
    modArr.push(arr.shift() * arr.pop())
    return minSum(arr,modArr)
  }
  return modArr.reduce((acc, cur)=> acc+=cur, 0)
}


const minSum = arr =>
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);