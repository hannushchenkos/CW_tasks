// https://www.codewars.com/kata/5ad0d8356165e63c140014d4

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

//     100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
//     90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
//     75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
//     0, in other cases


let finalGrade = (e, p) => (e > 90 || p > 10) ? 100 : (e > 75 && p > 4) ? 90 : (e > 50 && p > 1) ? 75 : 0

//function finalGrade (exam, projects) {
//  if(exam > 90 || projects > 10) return 100;
//  if(exam > 75 & projects >= 5) return 90;
//  if(exam > 50 & projects >= 2) return 75;
//  return 0;
// }

console.log(finalGrade(55, 10));