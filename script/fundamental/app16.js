// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  let a = array.reduce((acc, item)=>{
      console.log(acc);
    return acc + item;
  }, 0)
  console.log(a);
  return Math.abs(a%2) === 1 ? "odd" : "even";
}

console.log(oddOrEven([-796347,-79979,145275,-753901,-973109,-258863,133129,829705,167865,689791,-77507]));