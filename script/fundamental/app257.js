//ASCII Total - https://www.codewars.com/kata/572b6b2772a38bc1e700007a/

// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// uniTotal("a") == 97
// uniTotal("aaa") == 291

function uniTotal (s) {
  return s ? s.split('').reduce((acc,cur)=>acc+=cur.charCodeAt(0), 0) : 0
}

function uniTotal(string) {
  return Array.prototype.reduce.call(string, (a, c) => a + c.charCodeAt(0), 0);
}
