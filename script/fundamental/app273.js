// Expressions Matter  - https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/ 

//     Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//     In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)

function expressionMatter(a, b, c) {
  let arr = [a*(b+c), a*b*c, a+b*c, (a+b)*c, a+b+c]
//   console.log(a, b, c, arr)
  return Math.max(...arr)
}
