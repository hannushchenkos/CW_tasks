// Filter the number - https://www.codewars.com/kata/55b051fac50a3292a9000025/

// Your task is to return a number from a string.

var filterString = function(value) {
  //   return +value.match(/[0-9]/g).join('')
    return +value.match(/\d/g).join('')
  }
  
  var FilterString = function(value) {
    return parseInt(value.replace(/[^\d]/g, ""))
  }
  
  const FilterString = value => +value.replace(/\D/g, '');
  
  var FilterString = function(value) {
    return +value.split('').filter(n => !isNaN(n)).join('');
  }
  