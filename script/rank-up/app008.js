// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

function findMissingLetter(array)
{
    let missedLetter;

    for (let i = 0; i < array.length-1; i++){
        console.log(array[i].charCodeAt(0));
        if (array[i+1].charCodeAt(0) - array[i].charCodeAt(0) === 1) {
            continue;}
        else if(array[i+1].charCodeAt(0) - array[i].charCodeAt(0) === 2){
            missedLetter = String.fromCharCode(array[i].charCodeAt(0)+1)
            console.log(missedLetter);
        }
    }
    return missedLetter;
}

// const findMissingLetter = (array) => {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//   const start = alphabet.indexOf(array[0]);
//   return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
// };

console.log(findMissingLetter(['A', 'B', 'D']));