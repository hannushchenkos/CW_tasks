// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output

function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2)
}

// function basicOp(operation, value1, value2)
// {
//   var cases = {
//     '+': value1 + value2,
//     '-': value1 - value2,
//     '*': value1 * value2,
//     '/': value1 / value2
//   };
//   return cases[operation]
// }

console.log(basicOp('+', 1, 15));