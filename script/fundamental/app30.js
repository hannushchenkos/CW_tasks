// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0. 

function countBy(x, n) {
  let arr = [];
      while (n>=x){
          arr.unshift(n * x)
          n--;
      }
  return arr;
}

// const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

// const countBy = (x, n) =>  [...Array(n)].map((_, idx) => ++idx * x);

console.log(countBy(3, 8));