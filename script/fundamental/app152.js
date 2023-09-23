//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/

// regEx
// function hasRepeats (str) {
//     return /(.).*\1/.test(str);
// }

function duplicateEncode(word){
  word = word.toLowerCase()
  let arr = [];
  for (var i=0; i<word.length; i++) {
      if ( word.indexOf(word[i]) !== word.lastIndexOf(word[i]) ) {
        arr.push(')') // repeats
      }else{
        arr.push('(')
      }
    }
  return arr.join('')
}

//function duplicateEncode(word){
//  return word
//    .toLowerCase()
//    .split('')
//    .map( function (a, i, w) {
//      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//    })
//    .join('');
//}

//function duplicateEncode(word) {
//  word = word.toLowerCase();
//  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
//}
