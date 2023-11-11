//https://www.codewars.com/kata/59f08f89a5e129c543000069

function dup(s) {
  return s.map(word=>word.split('').map((letter,idx)=>letter === word[idx+1] ? null : letter).filter(item=> item !== null).join(''))
};

// function dup(s) {
//   return s.map(x => x.replace(/(.)\1+/g,'$1'))
// };

// function dup(s) {
// 	return s.map(w => {
// 		return w.split('').filter((c, i, arr) => {
// 			return c !== arr[i - 1];
// 		}).join('');
// 	});
// };

// function dup(array) {
//   return array.map(word => word.split('').filter( (letter, index) => letter !== word[index + 1]).join(''))
//   };

// function dup(s) {
//   return s.map(x => x.replace(/[^\w\s]|(.)(?=\1)/gi, ""));
// }