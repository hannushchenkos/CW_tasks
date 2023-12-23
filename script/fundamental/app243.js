// Count the number of Duplicates - https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  let str = text.toLowerCase()
  const uom = new Set([...str]);
  const obj = Array.from(uom).reduce( (a,c) => { a[c]=0; return a; }, {});
  str.split('').forEach(item => obj[item]+=1)
  let count = Object.values(obj).reduce((acc, cur)=> cur > 1 ? acc+=1 : acc , 0);
  return count;
}
console.log(duplicateCount("aabbcde"));

function duplicateCount(text){
return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

function duplicateCount(text){
return text.toLowerCase().split('').filter(function(val, i, arr){
  return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
}).length;
}