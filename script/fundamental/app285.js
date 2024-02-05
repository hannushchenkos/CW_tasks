// Build a square - https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

function generateShape(i){
  return Array(i).fill('+'.repeat(i)).join('\n')
}

function generateShape(n){
  return ("+".repeat(n)+"\n").repeat(n).trim()
}
