// Combine strings function -  https://www.codewars.com/kata/55f73f66d160f1f1db000059

// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// let combineNames = function(name, surname){
//   return name + ' ' + surname
// }

// let combineNames = (name, surname) => `${name} ${surname}`

function combineNames(name, surname){
  //   return name + ' ' + surname
  //   return `${name} ${surname}`
  //   return [name,surname].join(' ')
    return [name,surname].join(' ')
    
  }
  
  
  const combineNames = (...names) => names.join(' ');
  
  function combineNames() {
    return Array.prototype.join.call(arguments, " ")
  }