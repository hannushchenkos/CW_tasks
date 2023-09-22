// https://www.codewars.com/kata/580a4734d6df748060000045/

function isSortedAndHow(array) {
  let sorted = [...array].sort((a, b) => a - b)
  console.log(sorted)
  let sortedReversed = [...sorted].reverse()
  console.log(sortedReversed + ' ' + array)
  
  return array[0] === sorted[0] ? "yes, ascending" : array[0] === sortedReversed[0] ? "yes, descending" : "no"
} 

// function isSortedAndHow(arr) {
//   return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
//          arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
// }

// const isSortedAndHow = array => {
//   let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0
//   let descending = array.filter((e, i, a) => e < a[i+1]).length == 0
  
//   return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
// }