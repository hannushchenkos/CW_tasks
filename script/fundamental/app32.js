// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  let modNumbers = [...numbers]
  let min = Math.min(...modNumbers);
  console.log(min);
  let smallestIndex = modNumbers.indexOf(min)
  modNumbers.splice(smallestIndex, 1);
  return modNumbers;
}

// const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));

console.log(removeSmallest([3, 1, 2, 5, 6]))