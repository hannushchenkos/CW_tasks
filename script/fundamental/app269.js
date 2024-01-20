// Max diff - https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095

// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

//     lst contains integers, that means it may contain some negative numbers
//     if lst is empty or contains a single element, return 0
//     lst is not sorted


function maxDiff(list) {
  return list.length < 2 ? 0 : Math.max(...list) - Math.min(...list)
};

function maxDiff(list) {
  if(!list.length) return 0;
  return Math.max(...list) - Math.min(...list);
};

function maxDiff(list) {
  return list.length ? Math.max(...list) - Math.min(...list) : 0;
};


//let smallestValue = Infinity;
//let biggestValue = -Infinity;