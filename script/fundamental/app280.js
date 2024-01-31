// Unique In Order - https://www.codewars.com/kata/54e6533c92449cc251001667

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInOrder=function(iterable){
  let arr = [...iterable]
  let result = iterable.length ? [arr.shift()] : []
  while(arr.length){
    arr[0] !== result[result.length-1] ? result.push(arr.shift()) : arr.shift()
  }
  return result;
}

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])

