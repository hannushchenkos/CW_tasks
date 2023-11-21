// Build Tower - https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(f){
  return Array(f).fill('   ').map((row,idx)=> {
    row = row.split('');
    row[0] = ' '.repeat(f - idx - 1)
    row[2] = ' '.repeat(f - idx - 1)
    row[1] = '*'.repeat(idx * 2 + 1)
    return row.join('')
  });
}

// function towerBuilder(n) {
//   return Array.from({length: n}, function(v, k) {
//     const spaces = ' '.repeat(n - k - 1);
//     return spaces + '*'.repeat(k + k + 1) + spaces;
//   });
// }

// function towerBuilder(n) {
//   return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
// }

// function towerBuilder(nFloors) {
//   var result = [];
//   var starNumber = 1;
//   for (i=1; i<=nFloors; i++) {
//     result[i-1] = " ".repeat(nFloors-i) + "*".repeat(starNumber) + " ".repeat(nFloors-i);
//     starNumber += 2;
//   }
//   return result;
// }
