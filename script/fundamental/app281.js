// pick a set of first elements - https://www.codewars.com/kata/572b77262bedd351e9000076


// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

function first(arr, n = 1) {
  console.log(arr , n)
  return arr.slice(0, n)
}