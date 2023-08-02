// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

const multiTable = (number) => {
  return [1,2,3,4,5,6,7,8,9,10].map(item => {
    return `${item} * ${number} = ${item*number}`
  }).join("\n")
}

function multiTable(n) {
  return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
}

