// Largest pair sum in array - https://www.codewars.com/kata/556196a6091a7e7f58000018

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum (numbers) {
  return numbers.sort((a,b)=>b-a)[0]+numbers[1]
}

function largestPairSum(numbers)
{

    numbers.sort(function(a,b){
        return b-a;
    });
    return numbers.shift()+numbers.shift();

}