// Indexed capitalization - https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/

// Given a string and an array of integers representing indices, capitalize all letters at the given indices. 

function capitalize(s,arr){
  return [...s].map((item,idx)=>arr.includes(idx) ? item.toUpperCase() : item).join('');
};

