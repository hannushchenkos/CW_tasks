// Find the nth Digit of a Number - https://www.codewars.com/kata/577b9960df78c19bca00007e/

// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
// Note

//     If num is negative, ignore its sign and treat it as a positive value
//     If nth is not positive, return -1
//     Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0


var findDigit = function(num, nth){
  let newNum = String(num).match(/\d+/gi)[0]
  console.log(num)
  return nth <= 0 ? - 1 : nth > newNum.length ? 0 : +[...String(newNum)].reverse()[nth-1]
}


const findDigit = (num, nth) =>
  nth > 0 ? +[...`${num}`].reverse()[--nth] || 0 : -1;


var findDigit = function(num, nth) {
  return --nth < 0?-1:+(''+Math.abs(num)).split('').reverse()[nth] || 0;
};
