// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let shortestLng = 100;
    s.split(' ').forEach(item => item.length < shortestLng ? shortestLng = item.length : item)
    return shortestLng
  }
  
  //function findShort(s){
  //  return Math.min.apply(null, s.split(' ').map(w => w.length));
  //}
  
  //function findShort(s){
  //    return Math.min(...s.split(" ").map (s => s.length));
  //}
  
  //function findShort(s){
  //  return s.split(' ').sort((a,b) => a.length - b.length)[0].length;
  //}