// An isogram - https://www.codewars.com/kata/54ba84be607a92aa900000f1/

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
  let arr = str.toLowerCase().split('');
  let set = Array.from(new Set(arr));
  console.log(str)
  console.log(set)
  return arr.length === set.length;
}

//function isIsogram(str){
//	return new Set(str.toUpperCase()).size == str.length;
//}

//function isIsogram(str){ 
//  return !/(\w).*\1/i.test(str)
//}

//function isIsogram(str){
//  return !str.match(/([a-z]).*\1/i);
//}

