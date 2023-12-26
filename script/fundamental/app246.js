// Check the exam - https://www.codewars.com/kata/5a3dd29055519e23ec000074 

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

function checkExam(arr1, arr2) {
  let result = arr2.reduce((acc,cur,idx)=>cur === arr1[idx] ? acc+=4 : cur === '' ? acc : acc-=1, 0)
  return result < 0 ? 0 : result;
}
 