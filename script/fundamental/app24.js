//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

const repeatStr = (n, s) => s.repeat(n);

//const repeatStr = function (n, s) { return Array(n).join(s) + s}

console.log(repeatStr(3, "*"));