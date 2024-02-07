// Pythagorean Triple - https://www.codewars.com/kata/5951d30ce99cf2467e000013/

// Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

function isPythagoreanTriple(integers) {
  let a = integers[0],b = integers[1], c = integers[2]
  a *= a; b *= b; c *= c;
  return a + b === c || a + c === b || b + c === a;
}

function isPythagoreanTriple([a,b,c],p=(a,b,c)=>a*a+b*b==c*c) {
  return p(a,b,c) || p(a,c,b) || p(c,b,a);
}