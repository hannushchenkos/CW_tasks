// Area of a Square - https://www.codewars.com/kata/5748838ce2fab90b86001b1a/

function squareArea(A){
  let r = A * 4 / (2 * Math.PI)
  return r * r
}

squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);