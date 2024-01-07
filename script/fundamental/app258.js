// Dashatize it - https://www.codewars.com/kata/58223370aef9fc03fd000071/

// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:
// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
  return (''+num).match(/[13579]{1}|[02468]+/gi).join('-')
}


function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
}